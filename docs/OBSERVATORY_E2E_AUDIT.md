# Observatory E2E Audit

## Scope
- Canonical browser proof surface: Playwright under `web/observatory/tests/e2e/`.
- Full browser proof: Chromium J01-J17 plus `J16a` and `J16b`.
- Cross-browser smoke: Firefox and WebKit for J01, J05, and J17.
- Backend/server proof retained separately through `tests/test_observatory_server.py` and `tests/test_observatory_measurements.py`.

## Bugs Fixed During Audit
- Active-state proof no longer depends on CSS classes. The React shell now exposes public state semantics through `role="tab"` + `aria-selected`, radio-like controls with `aria-checked`, and `data-state="active"` on selection buttons where no narrower ARIA pattern fits.
- Journey evidence emission is now fail-fast. `persistJourneyEvidence` verifies screenshot, DOM, and JSON artifacts exist and are non-empty before a journey can pass, and request failures are captured alongside console/network evidence.
- Static export proof now covers both supported HTTP-served parity and unsupported `file://` runtime behavior using a real exported `observatory_index.html` fixture.

## Remaining Browser Contract Gaps
- J06 is an explicit browser contract gap after rerun. The current React UI exposes a `Compare` graph-mode radio only; it still does not expose a coordinate-mode switcher or a baseline-vs-modified compare surface.
- J10-J14 remain explicit browser contract gaps against documented backend implementation. The current React UI still does not surface measure-preview, attributable edge edit, memode assertion, revert, or runtime-causality flows.

## Commands Run
- `npm --prefix web/observatory test`
- `npm --prefix web/observatory run build`
- `npm --prefix web/observatory run test:e2e -- --project=chromium --output=test-results/chromium-final`
- `npm --prefix web/observatory run test:e2e -- --project=firefox --project=webkit --output=test-results/cross-browser-smoke`
- `./.venv/bin/pytest -q tests/test_observatory_server.py tests/test_observatory_measurements.py`

## Exact Evidence Produced
- Chromium proof bundle: `web/observatory/test-results/chromium-final/`
- Firefox/WebKit smoke proof bundle: `web/observatory/test-results/cross-browser-smoke/`
- Each journey bundle contains `Jxx.json`, `Jxx.png`, and `Jxx.html` with DOM, screenshot, network log, SSE capture, console log, ledger diff, and localStorage diff when relevant.

## J01 — Boot, Source Honesty, and Build Freshness
- Register: Implemented
- Preconditions: live `normal` experiment, HTTP-served static export, stale `/api/status` fixture, unavailable-live fallback fixture.
- Operator intent: know whether the page is live or static and whether the frontend build is stale.
- Actual UI path used: open `live-normal`, inspect source/build badges; open `static-normal`; open `live-stale`; open `live-unavailable`.
- Expected UI states: explicit live/static badge, visible experiment identity, stale-build warning, honest static fallback when live API is unavailable, and no mutation controls in static mode.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J01-smoke-chro-9db82-honesty-and-build-freshness-chromium/J01.json`; Firefox `web/observatory/test-results/cross-browser-smoke/observatory-J01-smoke-chro-9db82-honesty-and-build-freshness-firefox/J01.json`; WebKit `web/observatory/test-results/cross-browser-smoke/observatory-J01-smoke-chro-9db82-honesty-and-build-freshness-webkit/J01.json`.
- Network/SSE evidence: live mode fetched `/__e2e__/api/normal/status` plus live payloads; static mode fetched adjacent JSON artifacts only; no SSE events.
- Ledger diff or proof of no ledger change: `delta 0` for live, stale, and unavailable ledgers.
- localStorage diff when relevant: none.
- Result: pass.

## J02 — Payload Lifecycle Clarity and Progressive Loading
- Register: Implemented
- Preconditions: live `normal` experiment with deferred geometry.
- Operator intent: begin reading before the heavy geometry payload arrives.
- Actual UI path used: open `live-normal`, read Overview while graph/geometry remain deferred, then navigate to Geometry.
- Expected UI states: essential payloads usable before heavy payloads, explicit loading/deferred states, no whole-app spinner after essentials settle.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J02-chromium-p-91cc1-ity-and-progressive-loading-chromium/J02.json`.
- Network/SSE evidence: overview, measurements, and basin fetched first; graph fetched in background; geometry remained deferred until the Geometry tab was opened.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.

## J03 — Graph Inspect Is Read-Only and Provenance-Rich
- Register: Implemented
- Preconditions: inspectable node and provenance-rich edge in the `normal` graph payload.
- Operator intent: inspect node/edge identity, provenance, evidence label, confidence, and graph context without mutation.
- Actual UI path used: Graph tab; select `Graph entity Persistence Loop`; inspect cards; switch to `Raw JSON`; return to `Cards`; select `Graph relation SUPPORTS: Persistence Loop -> Retrieval Bridge`.
- Expected UI states: structured cards for identity, ontology, provenance, cluster membership, memode membership, supporting relations, active-set presence, and measurement history; Raw JSON remains a secondary debug tab.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J03-chromium-g-37bae-ad-only-and-provenance-rich-chromium/J03.json`.
- Network/SSE evidence: GET-only read traffic; no POST `/preview`, `/commit`, or `/revert`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.

## J04 — Cross-Surface Coherence
- Register: Implemented
- Preconditions: `normal` fixture with overlapping graph/basin/transcript identities.
- Operator intent: carry a selection coherently across graph, basin, overview, transcript, and inspector surfaces.
- Actual UI path used: select `Graph entity Persistence Loop`; switch to Basin; select `Basin turn T3 turn-003 Regard Cluster`; confirm `Transcript turn T3 turn-003` stays `data-state="active"` through Overview and back to Graph.
- Expected UI states: selection identity and active-state coherence persist across surfaces without silent retargeting.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J04-chromium-cross-surface-coherence-chromium/J04.json`.
- Network/SSE evidence: GET-only traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.

## J05 — Basin Provenance, Derived Badges, and Sparse Honesty
- Register: Implemented
- Preconditions: normal static basin fixture plus sparse basin fixture with `filtered_turn_count < 2`.
- Operator intent: read basin metadata honestly without confusing lift/render choices for evidence.
- Actual UI path used: static normal Basin tab; inspect projection and lift badges; toggle `time_lift`; open static sparse Basin tab.
- Expected UI states: explicit `Projection`, explicit `Lift`, visible `Derived` badge, honest sparse empty state, and no invented basin.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J05-smoke-chro-abc57-d-badges-and-sparse-honesty-chromium/J05.json`; Firefox `web/observatory/test-results/cross-browser-smoke/observatory-J05-smoke-chro-abc57-d-badges-and-sparse-honesty-firefox/J05.json`; WebKit `web/observatory/test-results/cross-browser-smoke/observatory-J05-smoke-chro-abc57-d-badges-and-sparse-honesty-webkit/J05.json`.
- Network/SSE evidence: static GETs only; no POSTs; no SSE.
- Ledger diff or proof of no ledger change: `delta 0` for normal and sparse ledgers.
- localStorage diff when relevant: none.
- Result: pass.

## J06 — Compare / Coordinate Browser Truth Revalidation
- Register: Explicit browser contract gap
- Preconditions: graph payload present.
- Operator intent: compare coordinate/layout views without confusing them for graph mutation.
- Actual UI path used: Graph tab; activate `Compare` radio; inspect for baseline/modified state and coordinate-mode controls.
- Expected UI states: explicit coordinate-mode controls and compare semantics separated from mutation/ledger state.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J06-chromium-r-d9f79-r-truth-before-any-demotion-chromium/J06.json`.
- Network/SSE evidence: GET-only traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as browser gap proof.
- If absent: exact proof of browser contract gap: the React UI exposes a `Compare` graph-mode radio only; there is still no `Coordinate mode` radiogroup and no visible `Baseline`/`Modified` compare surface in the DOM.

## J07 — Browser-Local Preset Persistence Remains Non-Authoritative
- Register: Implemented
- Preconditions: clean localStorage on the target origin; normal and manifest-hash-mismatch fixtures.
- Operator intent: persist browser view state locally without leaking into authoritative evidence or the wrong manifest hash.
- Actual UI path used: clear localStorage once, open static normal Graph tab, set `Compare` plus `hidden`, reload, reopen Graph, then switch to the hash-mismatch static export.
- Expected UI states: preset survives reload, remains browser-local, and does not leak into the wrong manifest-hash context.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J07-chromium-b-62ab7-e-remains-non-authoritative-chromium/J07.json`.
- Network/SSE evidence: GET-only traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: restore added the expected `eden.observatory.view_presets.v1::...::manifest-graph-hash-normal-v1` key; hash-mismatch added a fresh `...::manifest-graph-hash-normal-v2` key instead of reusing the old manifest hash.
- Result: pass.

## J08 — Graceful Degradation for Partial Payload Failures
- Register: Implemented
- Preconditions: partial fixture with geometry `500` and transcript `404`.
- Operator intent: understand what failed without the whole app collapsing or lying.
- Actual UI path used: open `live-partial`; inspect Geometry tab; return to Graph and inspect transcript diagnostics.
- Expected UI states: scoped Geometry error state, unaffected Graph surface remains usable, transcript failure visible without fake success copy.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J08-chromium-g-181ce-or-partial-payload-failures-chromium/J08.json`.
- Network/SSE evidence: failing GETs for `/__e2e__/api/partial/geometry` and `/__e2e__/api/partial/transcript`; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.

## J09 — SSE Invalidation Refresh Discipline
- Register: Implemented
- Preconditions: live `normal` experiment plus harness-triggered invalidation event.
- Operator intent: stay current through compact invalidation events without creating phantom mutations.
- Actual UI path used: open `live-normal`; select `Transcript turn T2 turn-002`; trigger invalidation through the harness; inspect Measurements and then Overview.
- Expected UI states: compact invalidation event received, payloads re-fetched, selection preserved, and no ledger change from refresh handling alone.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J09-chromium-SSE-invalidation-refresh-discipline-chromium/J09.json`.
- Network/SSE evidence: one captured SSE invalidation event, then follow-up GET refreshes for graph, basin, overview, measurements, transcript, runtime status/model, and tanakh; no POSTs from the UI.
- Ledger diff or proof of no ledger change: `delta 1`, caused by the harness-triggered committed event rather than the UI refresh path.
- localStorage diff when relevant: none.
- Result: pass.

## J10 — Measure Mode Preview Without Mutation
- Register: Implemented server/API; explicit browser contract gap
- Preconditions: current React UI only.
- Operator intent: preview or measure geometry without mutation if the GUI path exists.
- Actual UI path used: load `live-normal`; inspect all visible tabs, radios, and buttons for explicit `Measure`, `Preview`, or `Commit` browser controls.
- Expected UI states: explicit measure/preview controls if implemented in the browser.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J10-chromium-p-c73a6--mode-is-a-GUI-contract-gap-chromium/J10.json`.
- Network/SSE evidence: GET-only traffic; no POST `/preview`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as browser gap proof against backend-implemented contract.
- If absent: exact proof of browser contract gap: no `Measure` tab or radio is present, and no `Preview` or `Commit` button is present in the current React UI.

## J11 — Edit Edge Add/Update/Remove Is Attributable and Preview-Separated
- Register: Implemented server/API; explicit browser contract gap
- Preconditions: current React UI only.
- Operator intent: run an attributable preview-separated edge mutation flow if the GUI path exists.
- Actual UI path used: load `live-normal`; inspect for `Preview`, `Commit`, operator, rationale, evidence-label, and confidence controls.
- Expected UI states: explicit attributable edit controls if implemented in the browser.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J11-chromium-p-ed158-emove-is-a-GUI-contract-gap-chromium/J11.json`.
- Network/SSE evidence: GET-only traffic; no POST `/preview` or `/commit`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as browser gap proof against backend-implemented contract.
- If absent: exact proof of browser contract gap: no `Preview` or `Commit` button and no attributable edit fields are present in the current React UI.

## J12 — Known Memode Assertion Enforces Admissibility and Provenance Separation
- Register: Implemented server/API; explicit browser contract gap
- Preconditions: current React UI only.
- Operator intent: assert a known memode if the GUI path exists.
- Actual UI path used: load `live-normal`; inspect body text and controls for `Assert known memode`, `Preview`, and `Commit`.
- Expected UI states: explicit admissibility flow if implemented in the browser.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J12-chromium-p-02546-rtion-is-a-GUI-contract-gap-chromium/J12.json`.
- Network/SSE evidence: GET-only traffic; no POSTs; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as browser gap proof against backend-implemented contract.
- If absent: exact proof of browser contract gap: no memode assertion action and no preview/commit controls are present in the current React UI.

## J13 — Revert Is Explicit, Attributable, and Ledgered
- Register: Implemented server/API; explicit browser contract gap
- Preconditions: current React UI only.
- Operator intent: revert a prior observatory mutation if the GUI path exists.
- Actual UI path used: open Measurements and inspect for a `Revert` action.
- Expected UI states: explicit revert action if implemented in the browser.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J13-chromium-p-cb40e-from-the-current-browser-UI-chromium/J13.json`.
- Network/SSE evidence: GET-only traffic; no POST `/revert`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as browser gap proof against backend-implemented contract.
- If absent: exact proof of browser contract gap: Measurements remains readable, but no `Revert` action is surfaced anywhere in the current React UI.

## J14 — Runtime Bridge Causality
- Register: Implemented server/API; explicit browser contract gap
- Preconditions: current React UI only.
- Operator intent: verify browser-visible runtime causality after observatory mutation if the GUI path exists.
- Actual UI path used: load `live-normal`; inspect body text for runtime log, trace, or causality surfaces.
- Expected UI states: runtime/trace surface if implemented in the browser.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J14-chromium-p-e516e--surfaced-in-the-browser-UI-chromium/J14.json`.
- Network/SSE evidence: GET-only traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as browser gap proof against backend-implemented contract.
- If absent: exact proof of browser contract gap: the current React bundle exposes no runtime log, trace, or mutation-causality panel.

## J15 — Large-Graph Resilience and Honest Caps
- Register: Implemented
- Preconditions: heavy seeded fixture.
- Operator intent: stay usable under scale without silent truncation.
- Actual UI path used: open `live-heavy`; inspect Graph caps; switch to Basin; return to Graph.
- Expected UI states: explicit cap copy and continued usability.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J15-chromium-l-aa576--resilience-and-honest-caps-chromium/J15.json`.
- Network/SSE evidence: GET-only traffic; no POSTs; no SSE.
- Ledger diff or proof of no ledger change: `delta 0` against the heavy fixture ledger.
- localStorage diff when relevant: none.
- Result: pass.

## J16a — Supported HTTP-Served Static Parity and Honest Limitations
- Register: Implemented
- Preconditions: same experiment available in live and HTTP-served static modes.
- Operator intent: compare live and static read truth and verify static limits stay explicit.
- Actual UI path used: inspect Graph, Basin, and Measurements in `live-normal`; repeat in `static-normal`.
- Expected UI states: materially consistent read-only facts; explicit static badge; no live mutation masquerade; no preview/commit/revert path in static mode.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J16a-chromium--7b614-rity-and-honest-limitations-chromium/J16a.json`.
- Network/SSE evidence: live GETs hit `/__e2e__/api/normal/*`; static GETs hit `/__e2e__/static/normal/*`; no POSTs; no SSE in static mode.
- Ledger diff or proof of no ledger change: `delta 0` for both live and static ledgers.
- localStorage diff when relevant: none.
- Result: pass.

## J16b — Unsupported `file://` Runtime Proof
- Register: Implemented
- Preconditions: real exported `observatory_index.html` bundle under `exports/`.
- Operator intent: verify that unsupported `file://` opening does not masquerade as a supported static-ready state.
- Actual UI path used: open `file:///Users/brianray/Adam/exports/021281fa-fceb-4345-aed6-1988800dcb9f/observatory_index.html` directly in Chromium.
- Expected UI states: the app shell must not reach a truthful supported-static-ready state.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J16b-chromium--b110d-upported-static-ready-state-chromium/J16b.json`.
- Network/SSE evidence: no browser-initiated mutation requests; console error and request-failure evidence captured for the bundled module load; no SSE.
- Ledger diff or proof of no ledger change: `delta 0` against the export fixture `measurement_events.json`.
- localStorage diff when relevant: none.
- Result: pass.

## J17 — Keyboard-Operable Controls and Textual Equivalents for Graph Information
- Register: Implemented
- Preconditions: current React UI.
- Operator intent: operate the observatory without depending on pointer-only graph interpretation.
- Actual UI path used: keyboard-only to Graph tab, keyboard focus to `Graph entity Persistence Loop`, keyboard activation of `Raw JSON`, reverse-tab to Basin, keyboard activation of Basin.
- Expected UI states: surface tabs, entity buttons, and inspector controls reachable by keyboard; essential graph/basin information available in text form.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J17-smoke-chro-fd69e-d-textual-graph-equivalents-chromium/J17.json`; Firefox `web/observatory/test-results/cross-browser-smoke/observatory-J17-smoke-chro-fd69e-d-textual-graph-equivalents-firefox/J17.json`; WebKit `web/observatory/test-results/cross-browser-smoke/observatory-J17-smoke-chro-fd69e-d-textual-graph-equivalents-webkit/J17.json`.
- Network/SSE evidence: GET-only traffic; no POSTs; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.
