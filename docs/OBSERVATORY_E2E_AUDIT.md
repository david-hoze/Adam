# Observatory E2E Audit

## Scope
- Primary proof harness: Playwright against the checked-in React observatory bundle, with the deterministic harness in `web/observatory/tests/e2e/harness/`.
- Primary browser proof: Chromium full battery J01-J17.
- Secondary browser proof: Firefox and WebKit smoke for J01, J05, and J17.
- Existing server/measurement evidence retained through `tests/test_observatory_server.py`, `tests/test_observatory_measurements.py`, and `./.venv/bin/pytest -q`.

## Bugs Fixed During Audit
- Renderer fallback root reuse wiped Graph/Basin fallback diagnostics after cleanup. Fixed by keying the canvas and fallback roots so React does not reuse the renderer container across failure rerenders.
- Browser-local preset restore had a read/write race and no default reset on new preset keys. Fixed by loading the preset before writing and resetting to defaults when a new surface/hash key has no stored preset.
- Geometry error surfaces showed generic deferred copy even after a real HTTP failure. Fixed by surfacing the actual payload error in the Geometry panel.
- Text-access/keyboard selectors were ambiguous across Graph Entities, Relations, Basin Turns, and Transcript. Fixed with narrow accessible names and a keyboard helper that prefers `aria-label` and supports reverse tabbing.

## Remaining GUI Contract Gaps
- J06 is still a GUI contract gap: the React UI has a `Compare` graph mode button, but no explicit coordinate-mode switcher or baseline-vs-modified compare surface that can be proved as non-authoritative view state.
- J10-J14 are still GUI contract gaps: the current React UI does not expose measure-preview, attributable edge edit, memode assertion, revert, or runtime-causality flows even though server-side contracts exist below the browser surface.

## Commands Run
- `npm --prefix web/observatory test`
- `npm --prefix web/observatory run build`
- `npm --prefix web/observatory run test:e2e -- --project=chromium --output=test-results/chromium-final`
- `npm --prefix web/observatory run test:e2e -- --project=firefox --output=test-results/firefox-final`
- `npm --prefix web/observatory run test:e2e -- --project=webkit --output=test-results/webkit-final`
- `npx playwright install firefox webkit`
- `./.venv/bin/pytest -q`

## Exact Evidence Produced
- Chromium proof bundle: `web/observatory/test-results/chromium-final/`
- Firefox smoke proof bundle: `web/observatory/test-results/firefox-final/`
- WebKit smoke proof bundle: `web/observatory/test-results/webkit-final/`
- Each journey bundle contains `Jxx.json`, `Jxx.png`, and `Jxx.html` with DOM, screenshot, network log, SSE capture, console log, ledger diff, and localStorage diff when relevant.

## J01 — Boot, Source Honesty, and Build Freshness
- Register: Implemented
- Preconditions: live `normal` experiment, HTTP-served static export, stale `/api/status` fixture, unavailable-live fallback fixture.
- Operator intent: know whether the page is live or static and whether the frontend build is stale.
- Actual UI path used: open `live-normal`, inspect badges; open `static-normal`; open `live-stale`; open `live-unavailable`.
- Expected UI states: explicit live/static badge, visible experiment identity, stale-build warning, honest static fallback when live API is unavailable.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J01-smoke-chro-9db82-honesty-and-build-freshness-chromium/J01.json`; Firefox smoke `web/observatory/test-results/firefox-final/observatory-J01-smoke-chro-9db82-honesty-and-build-freshness-firefox/J01.json`; WebKit smoke `web/observatory/test-results/webkit-final/observatory-J01-smoke-chro-9db82-honesty-and-build-freshness-webkit/J01.json`.
- Network/SSE evidence: live mode fetched `/api/status` plus live overview/measurements/basin and deferred graph/geometry payloads; static mode fetched adjacent JSON artifacts only; no SSE events.
- Ledger diff or proof of no ledger change: `delta 0` for live, stale, and unavailable ledgers.
- localStorage diff when relevant: none.
- Result: pass.

## J02 — Payload Lifecycle Clarity and Progressive Loading
- Register: Implemented
- Preconditions: live `normal` experiment with deferred geometry.
- Operator intent: begin reading before the heavy geometry payload arrives.
- Actual UI path used: open `live-normal`, read Overview while graph/geometry remained deferred, then navigate to Geometry.
- Expected UI states: essential payloads usable before heavy payloads, explicit loading/deferred states, no whole-app spinner after essentials settle.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J02-chromium-p-91cc1-ity-and-progressive-loading-chromium/J02.json`.
- Network/SSE evidence: overview, measurements, and basin fetched first; graph fetched in background; geometry stayed deferred until the Geometry surface was opened.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.

## J03 — Graph Inspect Is Read-Only and Provenance-Rich
- Register: Implemented
- Preconditions: inspectable node and provenance-rich edge in `normal` graph payload.
- Operator intent: inspect node/edge identity, provenance, evidence label, confidence, and graph context without mutation.
- Actual UI path used: Graph surface; select `Graph entity Persistence Loop`; inspect cards; switch to `Raw JSON`; return to cards; select `Graph relation SUPPORTS: Persistence Loop -> Retrieval Bridge`.
- Expected UI states: structured cards for identity, ontology, provenance, cluster membership, memode membership, supporting relations, active-set presence, measurement history; raw JSON secondary only.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J03-chromium-g-37bae-ad-only-and-provenance-rich-chromium/J03.json`.
- Network/SSE evidence: read-only GET traffic only; no POST `/preview`, `/commit`, or `/revert`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.

## J04 — Cross-Surface Coherence
- Register: Implemented
- Preconditions: `normal` fixture with overlapping graph/basin/transcript identities.
- Operator intent: carry a selection coherently across graph, basin, overview, transcript, and inspector surfaces.
- Actual UI path used: select `Graph entity Persistence Loop`; switch to Basin; select `Basin turn T3 turn-003 Regard Cluster`; confirm `Transcript turn T3 turn-003` stays active through Overview and back to Graph.
- Expected UI states: selection identity and active-state coherence persist across surfaces without silent retargeting.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J04-chromium-cross-surface-coherence-chromium/J04.json`.
- Network/SSE evidence: GET-only read traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.

## J05 — Basin Provenance, Derived Badges, and Sparse Honesty
- Register: Implemented
- Preconditions: normal static basin fixture plus sparse basin fixture with `filtered_turn_count < 2`.
- Operator intent: read basin metadata honestly without confusing lift/render choices for evidence.
- Actual UI path used: static normal Basin surface; inspect projection and lift badges; toggle `time_lift`; open static sparse Basin surface.
- Expected UI states: explicit `Projection`, explicit `Lift`, visible `Derived` badge, honest sparse empty state, no invented basin.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J05-smoke-chro-abc57-d-badges-and-sparse-honesty-chromium/J05.json`; Firefox smoke `web/observatory/test-results/firefox-final/observatory-J05-smoke-chro-abc57-d-badges-and-sparse-honesty-firefox/J05.json`; WebKit smoke `web/observatory/test-results/webkit-final/observatory-J05-smoke-chro-abc57-d-badges-and-sparse-honesty-webkit/J05.json`.
- Network/SSE evidence: static GETs only; no POSTs; no SSE.
- Ledger diff or proof of no ledger change: `delta 0` for normal and sparse ledgers.
- localStorage diff when relevant: none.
- Result: pass. In headless environments without usable WebGL the panel now renders `Basin renderer unavailable` plus the text-access basin controls instead of silently blanking.

## J06 — Coordinate Modes and Compare Do Not Masquerade as Mutation
- Register: Conceptual
- Preconditions: graph payload present.
- Operator intent: compare coordinate/layout views without confusing them for graph mutation.
- Actual UI path used: Graph surface; activate `Compare`; inspect for coordinate-mode controls and baseline/modified compare state.
- Expected UI states: explicit coordinate-mode view controls and compare semantics separated from mutation/ledger state.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J06-chromium-p-db1b8-nd-compare-GUI-contract-gap-chromium/J06.json`.
- Network/SSE evidence: GET-only traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as GUI gap proof.
- If absent: exact proof of GUI contract gap: the React UI exposes a `Compare` graph-mode button but no coordinate-mode switcher, no baseline/modified compare surface, and no additional ledger-affecting behavior.

## J07 — Browser-Local Preset Persistence Remains Non-Authoritative
- Register: Implemented
- Preconditions: clean localStorage on the target origin; normal and manifest-hash-mismatch fixtures.
- Operator intent: persist browser view state locally without leaking into authoritative evidence or the wrong manifest hash.
- Actual UI path used: clear localStorage once, open static normal Graph surface, set `Compare` plus `hidden`, reload, reopen Graph, then switch to the hash-mismatch static export.
- Expected UI states: preset survives reload, remains browser-local, and does not leak into the wrong manifest-hash context.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J07-chromium-b-62ab7-e-remains-non-authoritative-chromium/J07.json`.
- Network/SSE evidence: GET-only traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: restore added `eden.observatory.view_presets.v1::exp-observatory-e2e::graph::manifest-graph-hash-normal-v1`; hash-mismatch added fresh `...::manifest-graph-hash-normal-v2` keys instead of reusing the old manifest hash.
- Result: pass.

## J08 — Graceful Degradation for Partial Payload Failures
- Register: Implemented
- Preconditions: partial fixture with geometry `500` and transcript `404`.
- Operator intent: understand what failed without the whole app collapsing or lying.
- Actual UI path used: open `live-partial`; inspect Geometry surface; return to Graph and inspect transcript diagnostics.
- Expected UI states: scoped Geometry error state, unaffected Graph surface remains usable, transcript failure visible without fake success copy.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J08-chromium-g-181ce-or-partial-payload-failures-chromium/J08.json`.
- Network/SSE evidence: failing GETs for `/__e2e__/api/partial/geometry` and `/__e2e__/api/partial/transcript`; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.
- If failed: root cause and whether you fixed it: the Geometry surface previously showed only generic deferred copy after failure; fixed by surfacing `payloadStatuses.geometry.error` in-panel.

## J09 — SSE Invalidation Refresh Discipline
- Register: Implemented
- Preconditions: live `normal` experiment plus harness-triggered invalidation event.
- Operator intent: stay current through compact invalidation events without creating phantom mutations.
- Actual UI path used: open `live-normal`; select `Transcript turn T2 turn-002`; trigger invalidation through the harness; inspect Measurements and then Overview.
- Expected UI states: compact invalidation event received, payloads re-fetched, selection preserved, no ledger change from refresh handling alone.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J09-chromium-SSE-invalidation-refresh-discipline-chromium/J09.json`.
- Network/SSE evidence: one captured SSE invalidation event, then follow-up GET refreshes for graph/basin/overview/measurements/transcript/runtime status/model; no POSTs from the UI.
- Ledger diff or proof of no ledger change: `delta 1`, caused by the harness-triggered committed event `evt-normal-002`, not by the UI refresh path itself.
- localStorage diff when relevant: none.
- Result: pass.

## J10 — Measure Mode Preview Without Mutation
- Register: Conceptual
- Preconditions: current React UI only.
- Operator intent: preview/measure geometry without mutation if the GUI path exists.
- Actual UI path used: load `live-normal` and enumerate all visible buttons.
- Expected UI states: explicit measure/preview controls if implemented.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J10-chromium-p-c73a6--mode-is-a-GUI-contract-gap-chromium/J10.json`.
- Network/SSE evidence: GET-only traffic; no POST `/preview`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as GUI gap proof.
- If absent: exact proof of GUI contract gap: visible button names contain no `MEASURE`, `Measure`, `Preview`, or `Commit` controls.

## J11 — Edit Edge Add/Update/Remove Is Attributable and Preview-Separated
- Register: Conceptual
- Preconditions: current React UI only.
- Operator intent: run an attributable preview-separated edge mutation flow if the GUI path exists.
- Actual UI path used: load `live-normal`; inspect for edit textboxes, evidence comboboxes, confidence inputs, and `Preview`/`Commit` buttons.
- Expected UI states: explicit edit controls if implemented.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J11-chromium-p-ed158-emove-is-a-GUI-contract-gap-chromium/J11.json`.
- Network/SSE evidence: GET-only traffic; no POST `/preview` or `/commit`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as GUI gap proof.
- If absent: exact proof of GUI contract gap: no `Preview` or `Commit` buttons and no operator/evidence/confidence edit controls are present in the current React UI.

## J12 — Known Memode Assertion Enforces Admissibility and Provenance Separation
- Register: Conceptual
- Preconditions: current React UI only.
- Operator intent: assert a known memode if the GUI path exists.
- Actual UI path used: load `live-normal`; inspect for `Known memode` or `Assert known memode` controls plus `Preview`/`Commit` actions.
- Expected UI states: explicit admissibility flow if implemented.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J12-chromium-p-02546-rtion-is-a-GUI-contract-gap-chromium/J12.json`.
- Network/SSE evidence: GET-only traffic; no POSTs; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as GUI gap proof.
- If absent: exact proof of GUI contract gap: no memode assertion action or preview/commit controls are present in the current React UI.

## J13 — Revert Is Explicit, Attributable, and Ledgered
- Register: Conceptual
- Preconditions: current React UI only.
- Operator intent: revert a prior observatory mutation if the GUI path exists.
- Actual UI path used: open Measurements and inspect for a `Revert` action.
- Expected UI states: explicit revert action if implemented.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J13-chromium-p-cb40e-from-the-current-browser-UI-chromium/J13.json`.
- Network/SSE evidence: GET-only traffic; no POST `/revert`; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as GUI gap proof.
- If absent: exact proof of GUI contract gap: Measurements is readable, but no `Revert` action is surfaced anywhere in the current React UI.

## J14 — Runtime Bridge Causality
- Register: Conceptual
- Preconditions: current React UI only.
- Operator intent: verify browser-visible runtime causality after observatory mutation if the GUI path exists.
- Actual UI path used: load `live-normal`; inspect body text for runtime log, trace, or causality surfaces.
- Expected UI states: runtime/trace surface if implemented.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J14-chromium-p-e516e--surfaced-in-the-browser-UI-chromium/J14.json`.
- Network/SSE evidence: GET-only traffic; no mutation requests; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass as GUI gap proof.
- If absent: exact proof of GUI contract gap: the current React bundle exposes no runtime log, trace, or mutation-causality panel.

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

## J16 — Static Export Parity and Honest Limitations
- Register: Implemented
- Preconditions: same experiment available in live and static modes.
- Operator intent: compare live and static read truth and verify static limits stay explicit.
- Actual UI path used: inspect Graph, Basin, and Measurements in `live-normal`; repeat in `static-normal`.
- Expected UI states: materially consistent read-only facts; explicit static badge; no live mutation masquerade.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J16-chromium-s-bcd69-rity-and-honest-limitations-chromium/J16.json`.
- Network/SSE evidence: live GETs hit `/__e2e__/api/normal/*`; static GETs hit `/__e2e__/static/normal/*`; no POSTs; no SSE in static mode.
- Ledger diff or proof of no ledger change: `delta 0` for both live and static ledgers.
- localStorage diff when relevant: none.
- Result: pass.

## J17 — Keyboard-Operable Controls and Textual Equivalents for Graph Information
- Register: Implemented
- Preconditions: current React UI.
- Operator intent: operate the observatory without depending on pointer-only graph interpretation.
- Actual UI path used: keyboard-only to Graph surface, keyboard focus to `Graph entity Persistence Loop`, keyboard activation of `Raw JSON`, reverse-tab to Basin, keyboard activation of Basin surface.
- Expected UI states: surface tabs, entity buttons, and inspector controls reachable by keyboard; essential graph/basin information available in text form.
- Actual evidence gathered: Chromium `web/observatory/test-results/chromium-final/observatory-J17-smoke-chro-fd69e-d-textual-graph-equivalents-chromium/J17.json`; Firefox smoke `web/observatory/test-results/firefox-final/observatory-J17-smoke-chro-fd69e-d-textual-graph-equivalents-firefox/J17.json`; WebKit smoke `web/observatory/test-results/webkit-final/observatory-J17-smoke-chro-fd69e-d-textual-graph-equivalents-webkit/J17.json`.
- Network/SSE evidence: GET-only traffic; no POSTs; no SSE.
- Ledger diff or proof of no ledger change: `delta 0`.
- localStorage diff when relevant: none.
- Result: pass.
