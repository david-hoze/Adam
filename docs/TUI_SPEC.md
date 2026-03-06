# TUI Spec

The TUI is the primary EDEN runtime surface.

## Screens

### Startup screen

- startup summary
- backend input
- MLX model path input
- `Blank Eden`, `Seeded Eden`, `Resume Latest`
- startup log
- launch-contract panel

### Chat screen

Left column:

- command/control surface
- export / observatory / new-session controls
- motion / debug / help controls
- retrieval-depth input
- ingest path input and ingest button
- telemetry / graph stats
- bounded history

Center column:

- Adam core sigil
- dedicated response panel
- dedicated input composer
- dedicated feedback panel and feedback status

Right column:

- aperture / active set
- cogitation / decision trace
- forensic structured log

## Key bindings

- `F1`: help
- `Ctrl+S`: send turn
- `F2`: export observability artifacts
- `F3`: toggle local observatory server
- `F4`: toggle low-motion mode
- `F5`: open a new session

## Design contract

- fixed panes, no primary scrolling transcript
- amber-on-dark, operator-facing
- visible successful operations, not silent success
- trace panels show retrieval and membrane surfaces only
