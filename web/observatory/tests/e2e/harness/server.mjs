import fs from "node:fs";
import fsp from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { cloneScenarioState, createScenarioStore } from "./fixtures.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../../../../../..");
const args = process.argv.slice(2);
const port = Number(readArg("--port", "4173"));
const root = path.resolve(readArg("--root", defaultRoot));

const scenarioTemplates = createScenarioStore();
const scenarioState = new Map(Object.keys(scenarioTemplates).map((name) => [name, cloneScenarioState(scenarioTemplates, name)]));
const sseClients = new Map();

const pageDefinitions = {
  "live-normal": { scenario: "normal", liveMode: "live" },
  "static-normal": { scenario: "normal", liveMode: "static" },
  "live-stale": { scenario: "stale", liveMode: "live" },
  "live-unavailable": { scenario: "unavailable", liveMode: "live" },
  "live-partial": { scenario: "partial", liveMode: "live" },
  "static-sparse": { scenario: "sparse", liveMode: "static" },
  "static-hash-mismatch": { scenario: "hash-mismatch", liveMode: "static" },
  "live-heavy": { scenario: "heavy", liveMode: "live" },
};

const server = http.createServer(async (request, response) => {
  try {
    await handleRequest(request, response);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
    response.end(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }, null, 2));
  }
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write(`Observatory E2E harness listening on http://127.0.0.1:${port}\n`);
});

function readArg(flag, fallback) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : fallback;
}

function stateFor(name) {
  if (!scenarioState.has(name)) {
    throw new Error(`Unknown scenario '${name}'.`);
  }
  return scenarioState.get(name);
}

function resetScenario(name) {
  scenarioState.set(name, cloneScenarioState(scenarioTemplates, name));
  closeScenarioClients(name);
}

function closeScenarioClients(name) {
  const clients = sseClients.get(name) ?? [];
  for (const client of clients) {
    try {
      client.write(": reset\n\n");
      client.end();
    } catch {
      // ignore teardown errors
    }
  }
  sseClients.delete(name);
}

async function handleRequest(request, response) {
  const url = new URL(request.url ?? "/", `http://127.0.0.1:${port}`);
  const pathname = url.pathname;

  if (request.method === "POST" && pathname.startsWith("/__e2e__/control/")) {
    await handleControl(request, response, pathname);
    return;
  }
  if (pathname.startsWith("/__e2e__/pages/")) {
    await handlePage(response, pathname);
    return;
  }
  if (pathname.startsWith("/__e2e__/static/")) {
    await handleStaticPayload(response, pathname);
    return;
  }
  if (pathname.startsWith("/__e2e__/api/")) {
    await handleApi(request, response, pathname);
    return;
  }
  await serveFile(response, pathname);
}

async function handleControl(request, response, pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const scenario = parts[2];
  const action = parts[3];

  if (action === "reset") {
    resetScenario(scenario);
    return sendJson(response, { ok: true, scenario, action: "reset" });
  }

  if (action === "trigger-invalidation") {
    const state = stateFor(scenario);
    const nextEvent = {
      id: `evt-${scenario}-${String(state.measurements.events.length + 1).padStart(3, "0")}`,
      action_type: "edge_add",
      evidence_label: "OPERATOR_ASSERTED",
      operator_label: "second_actor",
      measurement_method: "edge_commit",
      confidence: 0.77,
      rationale: "Synthetic external mutation for SSE refresh coverage.",
      created_at: "2026-03-11T12:15:00Z",
      target_ids: ["meme-persistence", "meme-retrieval"],
      before_state: {},
      proposed_state: { edge_type: "SUPPORTS" },
      committed_state: { summary: "External edge commit triggered by harness." },
    };
    state.measurements.events.unshift(nextEvent);
    state.measurements.counts.events += 1;
    state.measurements.counts.action_types.edge_add = (state.measurements.counts.action_types.edge_add ?? 0) + 1;
    state.measurements.counts.evidence_labels.OPERATOR_ASSERTED = (state.measurements.counts.evidence_labels.OPERATOR_ASSERTED ?? 0) + 1;
    state.graph.counts.measurement_events = state.measurements.counts.events;
    state.overview.measurements = state.measurements.counts;
    state.graph.semantic_nodes[0].measurement_history = [
      { id: nextEvent.id, action_type: nextEvent.action_type },
      ...(state.graph.semantic_nodes[0].measurement_history ?? []),
    ];
    publishInvalidation(scenario, {
      experiment_id: state.experiment_id,
      session_id: state.session_id,
      kinds: ["graph", "measurements", "overview", "transcript"],
      reason: "measurement_committed",
    });
    return sendJson(response, { ok: true, scenario, event_id: nextEvent.id });
  }

  sendJson(response, { error: `Unknown control action '${action}'.` }, 404);
}

async function handlePage(response, pathname) {
  const pageName = pathname.split("/").pop()?.replace(/\.html$/, "") ?? "";
  const page = pageDefinitions[pageName];
  if (!page) {
    sendJson(response, { error: `Unknown page '${pageName}'.` }, 404);
    return;
  }
  const state = stateFor(page.scenario);
  const bootstrap = buildBootstrap(pageName, page, state);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EDEN Observatory</title>
  <link rel="stylesheet" href="/eden/observatory/static/observatory_app/style.css" />
</head>
<body>
  <div id="observatory-root"></div>
  <script>window.__EDEN_BOOTSTRAP__ = ${JSON.stringify(bootstrap).replace(/</g, "\\u003c")};</script>
  <script type="module" src="/eden/observatory/static/observatory_app/index.js"></script>
</body>
</html>`;
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
  response.end(html);
}

function buildBootstrap(pageName, page, state) {
  const payloadUrls = {
    graph: `/__e2e__/static/${page.scenario}/graph.json`,
    basin: `/__e2e__/static/${page.scenario}/basin.json`,
    overview: `/__e2e__/static/${page.scenario}/overview.json`,
    measurements: `/__e2e__/static/${page.scenario}/measurements.json`,
    geometry: `/__e2e__/static/${page.scenario}/geometry.json`,
  };

  const bootstrap = {
    mode: page.liveMode === "static" ? "static" : "hybrid",
    initial_surface: "overview",
    experiment_id: state.experiment_id,
    session_id: state.session_id,
    export_manifest_id: state.graph.export_manifest_id,
    source_graph_hash: state.graph.source_graph_hash,
    projection_method: state.basin.projection_method,
    payload_urls: payloadUrls,
  };

  if (page.liveMode === "live") {
    bootstrap.live_api = {
      status: `/__e2e__/api/${page.scenario}/status`,
      runtime_status: `/__e2e__/api/${page.scenario}/runtime/status`,
      runtime_model: `/__e2e__/api/${page.scenario}/runtime/model`,
      events: `/__e2e__/api/${page.scenario}/events`,
      overview: `/__e2e__/api/${page.scenario}/overview`,
      graph: `/__e2e__/api/${page.scenario}/graph`,
      basin: `/__e2e__/api/${page.scenario}/basin`,
      measurements: `/__e2e__/api/${page.scenario}/measurements`,
      geometry: `/__e2e__/api/${page.scenario}/geometry`,
      session_turns: `/__e2e__/api/${page.scenario}/transcript`,
      sessions: `/__e2e__/api/${page.scenario}/sessions`,
    };
  }

  return bootstrap;
}

async function handleStaticPayload(response, pathname) {
  const [, , , scenario, fileName] = pathname.split("/");
  const state = stateFor(scenario);
  const payloadMap = {
    "graph.json": state.graph,
    "basin.json": state.basin,
    "overview.json": state.overview,
    "measurements.json": state.measurements,
    "geometry.json": state.geometry,
  };
  const payload = payloadMap[fileName];
  if (!payload) {
    sendJson(response, { error: `Unknown static payload '${fileName}'.` }, 404);
    return;
  }
  sendJson(response, payload);
}

async function handleApi(request, response, pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const scenario = parts[2];
  const resource = parts.slice(3).join("/");
  const state = stateFor(scenario);

  if (resource === "events") {
    handleEvents(response, scenario);
    return;
  }

  const failure = state.failures?.[resource];
  if (failure) {
    await maybeDelay(state, resource);
    sendJson(response, failure.body, failure.status);
    return;
  }

  await maybeDelay(state, resource);

  if (resource === "status") {
    if (state.status.error) {
      sendJson(response, { error: state.status.error }, 503);
      return;
    }
    sendJson(response, state.status);
    return;
  }
  if (resource === "runtime/status") {
    sendJson(response, state.runtime_status);
    return;
  }
  if (resource === "runtime/model") {
    sendJson(response, state.runtime_model);
    return;
  }
  if (resource === "graph") {
    sendJson(response, state.graph);
    return;
  }
  if (resource === "basin") {
    sendJson(response, state.basin);
    return;
  }
  if (resource === "overview") {
    sendJson(response, state.overview);
    return;
  }
  if (resource === "measurements") {
    sendJson(response, state.measurements);
    return;
  }
  if (resource === "geometry") {
    sendJson(response, state.geometry);
    return;
  }
  if (resource === "transcript") {
    sendJson(response, state.transcript);
    return;
  }
  if (resource === "sessions") {
    sendJson(response, { sessions: [{ id: state.session_id, experiment_id: state.experiment_id, title: "E2E session" }] });
    return;
  }

  sendJson(response, { error: `Unknown API resource '${resource}'.` }, 404);
}

async function maybeDelay(state, key) {
  const delay = Number(state.delays?.[key] ?? 0);
  if (delay > 0) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

function handleEvents(response, scenario) {
  response.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-store",
    Connection: "keep-alive",
  });
  response.write(": connected\n\n");

  const clientList = sseClients.get(scenario) ?? [];
  clientList.push(response);
  sseClients.set(scenario, clientList);

  const heartbeat = setInterval(() => {
    response.write(": heartbeat\n\n");
  }, 5000);

  response.on("close", () => {
    clearInterval(heartbeat);
    const next = (sseClients.get(scenario) ?? []).filter((client) => client !== response);
    sseClients.set(scenario, next);
  });
}

function publishInvalidation(scenario, payload) {
  const encoded = JSON.stringify(payload);
  for (const client of sseClients.get(scenario) ?? []) {
    client.write("event: observatory.invalidate\n");
    client.write(`data: ${encoded}\n\n`);
  }
}

async function serveFile(response, pathname) {
  const safePath = pathname === "/" ? "/README.md" : pathname;
  const filePath = path.resolve(root, `.${safePath}`);
  if (!filePath.startsWith(root)) {
    sendJson(response, { error: "Forbidden path." }, 403);
    return;
  }
  let stat;
  try {
    stat = await fsp.stat(filePath);
  } catch {
    sendJson(response, { error: "File not found." }, 404);
    return;
  }
  if (stat.isDirectory()) {
    sendJson(response, { error: "Directory listing disabled." }, 404);
    return;
  }
  response.writeHead(200, {
    "Content-Type": contentType(filePath),
    "Content-Length": stat.size,
    "Cache-Control": "no-store",
  });
  fs.createReadStream(filePath).pipe(response);
}

function contentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  if (extension === ".html") return "text/html; charset=utf-8";
  if (extension === ".js") return "text/javascript; charset=utf-8";
  if (extension === ".css") return "text/css; charset=utf-8";
  if (extension === ".json") return "application/json; charset=utf-8";
  if (extension === ".md") return "text/plain; charset=utf-8";
  return "application/octet-stream";
}

function sendJson(response, payload, status = 200) {
  const body = JSON.stringify(payload, null, 2);
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(body);
}
