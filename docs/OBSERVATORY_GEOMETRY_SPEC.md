# Observatory Geometry Spec

The geometry layer in v1.1 is an empirical observability surface over the memgraph and its temporal traces.

## Artifact outputs

- `geometry_diagnostics.json`
- `geometry_lab.html`
- `geometry_manifest.json`

## Coordinate methods

`force`

- render-only layout
- useful for navigation
- not evidence by itself

`spectral`

- Laplacian eigenvector projection
- derived coordinate method

`pca`

- PCA on adjacency rows
- derived coordinate method

`circular_candidate`

- evenly spaced circle ordered by spectral angle
- useful for testing whether circular organization survives coordinate changes

`temporal`

- chronology-oriented projection over ordered nodes

## Computed diagnostics

`OBSERVED`

- circularity / ringness proxy
- radiality / spoke-ness proxy
- linearity / chain-like proxy
- community structure
- triadic closure / motif richness

`DERIVED`

- mirror/reflection symmetry proxy
- chirality / handedness proxy on directed motifs
- translation-symmetry proxy on ordered structures
- projection quality summaries

## Slice support

- `full_graph`
- `current_session`
- `current_active_set`
- verdict slices when populated

## Ablations

Current v1.1 ablations:

- mask direct `CO_OCCURS_WITH` edges
- remove the dominant detected community

Each report includes:

- before scores
- after scores
- persistence score
- ablation detail string

## Interpretation boundary

The geometry lab is intentionally in conversation with the Karkada et al. symmetry paper on representation geometry and perturbation robustness, but it does not claim that this paper proves graph-based persona persistence. In EDEN, the paper influences:

- geometry-aware diagnostics
- symmetry language
- perturbation / ablation framing
- care around collective structure surviving local masking
