import { expect, test, type Page } from "@playwright/test";

import {
  assertGracefulDegradation,
  assertPayloadStatus,
  assertSourceMode,
  attachRecorder,
  diffLedger,
  diffLocalStorage,
  findRealExportFixture,
  mutationRequests,
  persistJourneyEvidence,
  resetScenario,
  snapshotLedger,
  snapshotLedgerFile,
  snapshotLocalStorage,
  triggerInvalidation,
} from "./helpers";

const pages = {
  liveNormal: "/__e2e__/pages/live-normal.html",
  staticNormal: "/__e2e__/pages/static-normal.html",
  liveStale: "/__e2e__/pages/live-stale.html",
  liveUnavailable: "/__e2e__/pages/live-unavailable.html",
  livePartial: "/__e2e__/pages/live-partial.html",
  staticSparse: "/__e2e__/pages/static-sparse.html",
  staticHashMismatch: "/__e2e__/pages/static-hash-mismatch.html",
  liveHeavy: "/__e2e__/pages/live-heavy.html",
};

const ledgers = {
  normalLive: "/__e2e__/api/normal/measurements",
  normalStatic: "/__e2e__/static/normal/measurements.json",
  stale: "/__e2e__/api/stale/measurements",
  unavailable: "/__e2e__/static/unavailable/measurements.json",
  partial: "/__e2e__/api/partial/measurements",
  sparse: "/__e2e__/static/sparse/measurements.json",
  hashMismatch: "/__e2e__/static/hash-mismatch/measurements.json",
  heavy: "/__e2e__/api/heavy/measurements",
};

test.describe.configure({ mode: "serial" });

async function waitForSseCount(page: Page, expectedCount: number) {
  await expect.poll(async () => page.evaluate(() => ((window as any).__EDEN_E2E_SSE__ ?? []).length)).toBe(expectedCount);
}

async function tabTo(page: Page, matcher: RegExp, reverse = false) {
  for (let index = 0; index < 120; index += 1) {
    await page.keyboard.press(reverse ? "Shift+Tab" : "Tab");
    const label = await page.evaluate(() => {
      const active = document.activeElement as HTMLElement | null;
      return active?.getAttribute("aria-label") || active?.innerText || active?.textContent || "";
    });
    if (matcher.test(label.trim())) return;
  }
  throw new Error(`Failed to focus element matching ${String(matcher)} with keyboard navigation.`);
}

function surfaceTab(page: Page, name: string) {
  return page.getByRole("tab", { name, exact: true });
}

function inspectorTab(page: Page, name: "Cards" | "Raw JSON") {
  return page.getByRole("tab", { name, exact: true });
}

function modeRadio(page: Page, name: string) {
  return page.getByRole("radio", { name, exact: true });
}

test("J01 @smoke @chromium boot, source honesty, and build freshness", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  await resetScenario(request, "stale");
  await resetScenario(request, "unavailable");
  const recorder = await attachRecorder(page);
  const liveBefore = await snapshotLedger(request, ledgers.normalLive);
  const staleBefore = await snapshotLedger(request, ledgers.stale);
  const unavailableBefore = await snapshotLedger(request, ledgers.unavailable);

  await page.goto(pages.liveNormal);
  await expect(page.getByText("exp-observatory-e2e")).toBeVisible();
  await assertSourceMode(page, "Live API");
  await expect(page.getByText(/Build warning:/)).toHaveCount(0);

  await page.goto(pages.staticNormal);
  await assertSourceMode(page, "Static export");
  await assertPayloadStatus(page, /Static export mode reads adjacent JSON artifacts/);
  await expect(page.getByRole("button", { name: /^Preview$/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Commit$/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Revert$/ })).toHaveCount(0);

  await page.goto(pages.liveStale);
  await assertSourceMode(page, "Live API", /Build warning: checked-in observatory bundle is stale/);

  await page.goto(pages.liveUnavailable);
  await assertSourceMode(page, "Static export");
  await expect(page.getByText("exp-observatory-unavailable")).toBeVisible();

  const liveAfter = await snapshotLedger(request, ledgers.normalLive);
  const staleAfter = await snapshotLedger(request, ledgers.stale);
  const unavailableAfter = await snapshotLedger(request, ledgers.unavailable);
  expect(diffLedger(liveBefore, liveAfter).delta).toBe(0);
  expect(diffLedger(staleBefore, staleAfter).delta).toBe(0);
  expect(diffLedger(unavailableBefore, unavailableAfter).delta).toBe(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);
  expect(recorder.network.some((entry) => entry.url.includes("/__e2e__/api/normal/status"))).toBeTruthy();
  expect(recorder.network.some((entry) => entry.url.includes("/__e2e__/static/normal/overview.json"))).toBeTruthy();

  await persistJourneyEvidence(page, testInfo, "J01", recorder, {
    result: "pass",
    ledgerDiffs: {
      live: diffLedger(liveBefore, liveAfter),
      stale: diffLedger(staleBefore, staleAfter),
      unavailable: diffLedger(unavailableBefore, unavailableAfter),
    },
  });
});

test("J02 @chromium payload lifecycle clarity and progressive loading", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  await expect(page.getByText("Loading observatory payloads")).toBeVisible();
  await expect(page.getByText("exp-observatory-e2e")).toBeVisible();
  expect(recorder.network.some((entry) => entry.url.endsWith("/geometry"))).toBeFalsy();

  await surfaceTab(page, "Geometry").click();
  await assertGracefulDegradation(page, /Geometry payload loading/, /intentionally deferred until you open this tab/);
  await expect(page.getByText(/"coordinate_modes": \[/)).toBeVisible();
  const geometryCalls = recorder.network.filter((entry) => entry.url.endsWith("/geometry"));
  expect(geometryCalls.length).toBe(1);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J02", recorder, {
    result: "pass",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J03 @chromium graph inspect is read-only and provenance rich", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  await surfaceTab(page, "Graph").click();
  await expect(page.getByRole("button", { name: "Graph entity Persistence Loop" })).toBeVisible();
  await page.getByRole("button", { name: "Graph entity Persistence Loop" }).click();
  await expect(page.getByText("Identity")).toBeVisible();
  await expect(page.getByText("Ontology")).toBeVisible();
  await expect(page.getByText("Provenance")).toBeVisible();
  await expect(page.getByText("Cluster Membership")).toBeVisible();
  await expect(page.getByText("Memode Membership")).toBeVisible();
  await expect(page.getByText("Supporting Relations")).toBeVisible();
  await expect(page.getByText("Active Set Presence")).toBeVisible();
  await expect(page.getByText("Measurement History")).toBeVisible();
  await expect(page.getByRole("definition").filter({ hasText: /^meme-persistence$/ })).toBeVisible();

  await inspectorTab(page, "Raw JSON").click();
  await expect(page.getByText(/"id": "meme-persistence"/)).toBeVisible();
  await inspectorTab(page, "Cards").click();
  await page.getByRole("button", { name: "Graph relation SUPPORTS: Persistence Loop -> Retrieval Bridge" }).click();
  await expect(page.getByText(/OPERATOR_ASSERTED/)).toBeVisible();
  await expect(page.getByText(/0.91/)).toBeVisible();
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J03", recorder, {
    result: "pass",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J04 @chromium cross-surface coherence", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  await surfaceTab(page, "Graph").click();
  await page.getByRole("button", { name: "Graph entity Persistence Loop" }).click();
  await expect(page.getByRole("definition").filter({ hasText: /^meme-persistence$/ })).toBeVisible();

  await surfaceTab(page, "Basin").click();
  await expect(page.getByRole("definition").filter({ hasText: /^meme-persistence$/ })).toBeVisible();
  await page.getByRole("button", { name: "Basin turn T3 turn-003 Regard Cluster" }).click();
  await expect(page.getByRole("button", { name: "Transcript turn T3 turn-003" })).toHaveAttribute("data-state", "active");

  await surfaceTab(page, "Overview").click();
  await expect(page.getByRole("button", { name: "Transcript turn T3 turn-003" })).toHaveAttribute("data-state", "active");
  await surfaceTab(page, "Graph").click();
  await expect(page.getByRole("button", { name: "Transcript turn T3 turn-003" })).toHaveAttribute("data-state", "active");
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J04", recorder, {
    result: "pass",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J05 @smoke @chromium basin provenance, derived badges, and sparse honesty", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  await resetScenario(request, "sparse");
  const recorder = await attachRecorder(page);
  const normalBefore = await snapshotLedger(request, ledgers.normalStatic);
  const sparseBefore = await snapshotLedger(request, ledgers.sparse);

  await page.goto(pages.staticNormal);
  await surfaceTab(page, "Basin").click();
  await expect(page.getByText(/Projection: svd_on_turn_features/)).toBeVisible();
  await expect(page.getByText(/Lift: flat/)).toBeVisible();
  await expect(page.getByText("Derived")).toBeVisible();
  await modeRadio(page, "time_lift").click();
  await expect(modeRadio(page, "time_lift")).toHaveAttribute("aria-checked", "true");
  await expect(page.getByText(/Lift: time_lift/)).toBeVisible();
  if (await page.getByTestId("basin-plot").count()) {
    await expect(page.getByTestId("basin-plot")).toBeVisible();
  } else {
    await assertGracefulDegradation(page, /Basin renderer unavailable/, /Use Basin Turns, transcript buttons, and projection metadata/);
  }

  await page.goto(pages.staticSparse);
  await surfaceTab(page, "Basin").click();
  await expect(page.getByText("Sparse basin data")).toBeVisible();
  await expect(page.getByText(/Filtered trajectory contains fewer than two turns/)).toBeVisible();
  await expect(page.getByTestId("basin-plot")).toHaveCount(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const normalAfter = await snapshotLedger(request, ledgers.normalStatic);
  const sparseAfter = await snapshotLedger(request, ledgers.sparse);
  expect(diffLedger(normalBefore, normalAfter).delta).toBe(0);
  expect(diffLedger(sparseBefore, sparseAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J05", recorder, {
    result: "pass",
    ledgerDiffs: {
      normal: diffLedger(normalBefore, normalAfter),
      sparse: diffLedger(sparseBefore, sparseAfter),
    },
  });
});

test("J06 @chromium revalidates compare/coordinate browser truth before any demotion", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  await surfaceTab(page, "Graph").click();
  await modeRadio(page, "Compare").click();
  await expect(modeRadio(page, "Compare")).toHaveAttribute("aria-checked", "true");
  await expect(page.getByText(/Baseline/)).toHaveCount(0);
  await expect(page.getByText(/Modified/)).toHaveCount(0);
  await expect(page.getByRole("radiogroup", { name: /Coordinate mode/i })).toHaveCount(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J06", recorder, {
    result: "gap",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J07 @chromium browser-local preset persistence remains non-authoritative", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  await resetScenario(request, "hash-mismatch");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalStatic);

  await page.goto(pages.staticNormal);
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  const storageBefore = await snapshotLocalStorage(page);
  await surfaceTab(page, "Graph").click();
  await modeRadio(page, "Compare").click();
  await modeRadio(page, "hidden").click();
  await page.reload();
  await expect(surfaceTab(page, "Graph")).toBeVisible();
  await surfaceTab(page, "Graph").click();
  await expect(modeRadio(page, "Compare")).toHaveAttribute("aria-checked", "true");
  await expect(modeRadio(page, "hidden")).toHaveAttribute("aria-checked", "true");
  const storageAfterRestore = await snapshotLocalStorage(page);

  await page.goto(pages.staticHashMismatch);
  await surfaceTab(page, "Graph").click();
  await expect(modeRadio(page, "Semantic Map")).toHaveAttribute("aria-checked", "true");
  const storageAfterMismatch = await snapshotLocalStorage(page);
  expect(diffLocalStorage(storageBefore, storageAfterRestore).added.length).toBeGreaterThan(0);
  expect(diffLocalStorage(storageAfterRestore, storageAfterMismatch).added.length).toBeGreaterThan(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalStatic);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J07", recorder, {
    result: "pass",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
    localStorageDiff: {
      restore: diffLocalStorage(storageBefore, storageAfterRestore),
      mismatch: diffLocalStorage(storageAfterRestore, storageAfterMismatch),
    },
  });
});

test("J08 @chromium graceful degradation for partial payload failures", async ({ page, request }, testInfo) => {
  await resetScenario(request, "partial");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.partial);

  await page.goto(pages.livePartial);
  await expect(page.getByText("exp-observatory-partial")).toBeVisible();
  await surfaceTab(page, "Geometry").click();
  await assertGracefulDegradation(page, /Geometry payload error/, /500 Internal Server Error for \/__e2e__\/api\/partial\/geometry/);
  await surfaceTab(page, "Graph").click();
  await expect(page.getByRole("button", { name: "Graph entity Persistence Loop" })).toBeVisible();
  await expect(page.getByText(/Transcript payload error/)).toBeVisible();
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.partial);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J08", recorder, {
    result: "pass",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J09 @chromium SSE invalidation refresh discipline", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  await page.getByRole("button", { name: "Transcript turn T2 turn-002" }).click();
  await expect(page.getByRole("button", { name: "Transcript turn T2 turn-002" })).toHaveAttribute("data-state", "active");

  const triggerResult = await triggerInvalidation(request, "normal");
  await waitForSseCount(page, 1);
  await expect.poll(async () => {
    await surfaceTab(page, "Measurements").click();
    return page.textContent("pre");
  }).toContain('"events": 2');
  await surfaceTab(page, "Overview").click();
  await expect(page.getByRole("button", { name: "Transcript turn T2 turn-002" })).toHaveAttribute("data-state", "active");

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(1);
  expect(mutationRequests(recorder.network)).toHaveLength(0);
  const sseEvents = await recorder.sseEvents();
  expect(sseEvents).toHaveLength(1);
  expect(sseEvents[0]).toMatchObject({
    experiment_id: "exp-observatory-e2e",
    session_id: "session-alpha",
    reason: "measurement_committed",
  });
  expect((sseEvents[0] as Record<string, unknown>).payload).toBeUndefined();

  await persistJourneyEvidence(page, testInfo, "J09", recorder, {
    result: "pass",
    triggerResult,
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J10 @chromium proves measure mode is a GUI contract gap", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  const interactiveLabels = await page.locator('[role="tab"], [role="radio"], button').allTextContents();
  expect(interactiveLabels).not.toContain("MEASURE");
  expect(interactiveLabels).not.toContain("Measure");
  expect(interactiveLabels).not.toContain("Preview");
  expect(interactiveLabels).not.toContain("Commit");
  await expect(page.getByRole("tab", { name: /^Measure$/i })).toHaveCount(0);
  await expect(page.getByRole("radio", { name: /^Measure$/i })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Preview$/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Commit$/ })).toHaveCount(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J10", recorder, {
    result: "gap",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
    interactiveLabels,
  });
});

test("J11 @chromium proves edit edge add/update/remove is a GUI contract gap", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  await expect(page.getByRole("button", { name: /^Preview$/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Commit$/ })).toHaveCount(0);
  await expect(page.getByRole("textbox", { name: /Operator label/i })).toHaveCount(0);
  await expect(page.getByRole("textbox", { name: /Rationale/i })).toHaveCount(0);
  await expect(page.getByRole("combobox", { name: /Evidence label/i })).toHaveCount(0);
  await expect(page.getByRole("spinbutton", { name: /Confidence/i })).toHaveCount(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J11", recorder, {
    result: "gap",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J12 @chromium proves memode assertion is a GUI contract gap", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  const bodyText = await page.textContent("body");
  expect(bodyText ?? "").not.toContain("Known memode");
  await expect(page.getByRole("button", { name: /^Assert known memode$/i })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Preview$/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Commit$/ })).toHaveCount(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J12", recorder, {
    result: "gap",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J13 @chromium proves revert is absent from the current browser UI", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  await surfaceTab(page, "Measurements").click();
  await expect(page.getByRole("button", { name: /^Revert$/ })).toHaveCount(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J13", recorder, {
    result: "gap",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J14 @chromium proves runtime-bridge causality is not yet surfaced in the browser UI", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalLive);

  await page.goto(pages.liveNormal);
  const bodyText = await page.textContent("body");
  expect(bodyText ?? "").not.toContain("Runtime log");
  expect(bodyText ?? "").not.toContain("Trace");
  expect(bodyText ?? "").not.toContain("Causality");
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalLive);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J14", recorder, {
    result: "gap",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J15 @chromium large-graph resilience and honest caps", async ({ page, request }, testInfo) => {
  await resetScenario(request, "heavy");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.heavy);

  await page.goto(pages.liveHeavy);
  await expect(page.getByText("exp-observatory-heavy")).toBeVisible();
  await expect(page.getByText(/Showing first 12 of 24 graph entities/)).toBeVisible();
  await expect(page.getByText(/Showing first 12 of 23 relations/)).toBeVisible();
  await surfaceTab(page, "Basin").click();
  await expect(page.getByText(/Showing first 12 of 16 basin turns/)).toBeVisible();
  await surfaceTab(page, "Graph").click();
  await expect(page.getByRole("button", { name: "Graph entity Heavy Meme 01" })).toBeVisible();
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.heavy);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J15", recorder, {
    result: "pass",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J16a @chromium supported HTTP-served static parity and honest limitations", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const liveBefore = await snapshotLedger(request, ledgers.normalLive);
  const staticBefore = await snapshotLedger(request, ledgers.normalStatic);

  await page.goto(pages.liveNormal);
  await surfaceTab(page, "Graph").click();
  await expect(page.getByRole("button", { name: "Graph entity Persistence Loop" })).toBeVisible();
  await surfaceTab(page, "Basin").click();
  await expect(page.getByText(/Projection: svd_on_turn_features/)).toBeVisible();
  await surfaceTab(page, "Measurements").click();
  await expect(page.getByText(/"events": 1/)).toBeVisible();

  await page.goto(pages.staticNormal);
  await assertSourceMode(page, "Static export");
  await expect(page.getByRole("button", { name: /^Preview$/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Commit$/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Revert$/ })).toHaveCount(0);
  await surfaceTab(page, "Graph").click();
  await expect(page.getByRole("button", { name: "Graph entity Persistence Loop" })).toBeVisible();
  await surfaceTab(page, "Basin").click();
  await expect(page.getByText(/Projection: svd_on_turn_features/)).toBeVisible();
  await surfaceTab(page, "Measurements").click();
  await expect(page.getByText(/"events": 1/)).toBeVisible();
  expect(mutationRequests(recorder.network)).toHaveLength(0);
  expect(recorder.network.some((entry) => entry.url.includes("/__e2e__/api/normal/"))).toBeTruthy();
  expect(recorder.network.some((entry) => entry.url.includes("/__e2e__/static/normal/"))).toBeTruthy();

  const liveAfter = await snapshotLedger(request, ledgers.normalLive);
  const staticAfter = await snapshotLedger(request, ledgers.normalStatic);
  expect(diffLedger(liveBefore, liveAfter).delta).toBe(0);
  expect(diffLedger(staticBefore, staticAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J16a", recorder, {
    result: "pass",
    ledgerDiffs: {
      live: diffLedger(liveBefore, liveAfter),
      static: diffLedger(staticBefore, staticAfter),
    },
  });
});

test("J16b @chromium unsupported file runtime does not reach supported static-ready state", async ({ page }, testInfo) => {
  const recorder = await attachRecorder(page);
  const exportFixture = await findRealExportFixture();
  const ledgerBefore = await snapshotLedgerFile(exportFixture.measurementEvents);

  await page.goto(exportFixture.fileUrl, { waitUntil: "load" });
  await page.waitForTimeout(1000);

  await expect(page.getByRole("heading", { name: "Live-first semantic graph and basin instrument" })).toHaveCount(0);
  await expect(page.getByRole("tab", { name: "Overview", exact: true })).toHaveCount(0);
  expect(mutationRequests(recorder.network)).toHaveLength(0);
  expect(
    recorder.consoleMessages.some((message) => message.startsWith("error:")) ||
      recorder.network.some((entry) => Boolean(entry.failureText)),
  ).toBeTruthy();

  const ledgerAfter = await snapshotLedgerFile(exportFixture.measurementEvents);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J16b", recorder, {
    result: "pass",
    exportDir: exportFixture.exportDir,
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});

test("J17 @smoke @chromium keyboard-operable controls and textual graph equivalents", async ({ page, request }, testInfo) => {
  await resetScenario(request, "normal");
  const recorder = await attachRecorder(page);
  const ledgerBefore = await snapshotLedger(request, ledgers.normalStatic);

  await page.goto(pages.staticNormal);
  await tabTo(page, /^Graph$/);
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Graph entity Persistence Loop" })).toBeVisible();
  await tabTo(page, /^Graph entity Persistence Loop$/);
  await page.keyboard.press("Enter");
  await expect(page.getByRole("definition").filter({ hasText: /^meme-persistence$/ })).toBeVisible();
  await tabTo(page, /^Raw JSON$/);
  await page.keyboard.press("Enter");
  await expect(page.getByText(/"id": "meme-persistence"/)).toBeVisible();
  await tabTo(page, /^Basin$/, true);
  await page.keyboard.press("Enter");
  await expect(surfaceTab(page, "Basin")).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("heading", { name: "Basin Turns" })).toBeVisible();
  expect(mutationRequests(recorder.network)).toHaveLength(0);

  const ledgerAfter = await snapshotLedger(request, ledgers.normalStatic);
  expect(diffLedger(ledgerBefore, ledgerAfter).delta).toBe(0);

  await persistJourneyEvidence(page, testInfo, "J17", recorder, {
    result: "pass",
    ledgerDiff: diffLedger(ledgerBefore, ledgerAfter),
  });
});
