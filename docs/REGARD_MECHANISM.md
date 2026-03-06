# Regard Mechanism

`eden/regard.py` implements the v1 regard math.

## Activation

For node `i` at time `t`:

`activation_i(t) = exp(-(t - last_active_i) / tau_i)`

`tau_i` is stored per meme/memode and defaults to:

- memes: `86400`
- memodes: `172800`

## Coherence and isolation

Coherence is derived from graph structure, not hand-entered labels:

- clustering coefficient
- degree
- triangle participation
- memode participation

Isolation penalty rises when a node is orphaned or trapped in a tiny component.

## Evidence, reward, and risk

- `evidence_i = log(1 + evidence_n + usage_count + 0.5 * feedback_count)`
- `reward_i = reward_ema + 0.35 * edit_ema`
- `risk_i = risk_ema + 0.35 * contradiction_count + 0.3 * membrane_conflicts`
- `persistence_i = 0.35 * log(1 + usage_count + evidence_n) + 0.65 * activation_i`
- `decay_i = 1 - activation_i`

## Regard total

`regard_i = wr*reward + we*evidence + wc*coherence + wp*persistence - wd*decay - wi*isolation - wk*risk`

Default weights:

- `wr=1.25`
- `we=0.75`
- `wc=0.95`
- `wp=0.8`
- `wd=0.65`
- `wi=0.7`
- `wk=1.1`

## Selection score

`selection_i = alpha*semantic_similarity + beta*activation + gamma*regard + delta*session_bias + eps*explicit_feedback - sigma*scope_penalty - mu*membrane_penalty`

Default weights:

- `alpha=1.2`
- `beta=0.7`
- `gamma=0.95`
- `delta=0.35`
- `eps=0.5`
- `sigma=0.4`
- `mu=0.75`

## Feedback updates

Channel update:

`channel_new = (1 - eta) * channel_old + eta * signal`

Current EMA `eta`:

- `0.35`

Verdict mappings:

- `accept`: reward `+1.0`, risk `-0.1`
- `edit`: reward `+0.45`, risk `+0.15`, edit `+0.9`
- `reject`: reward `-0.4`, risk `+1.0`
- `skip`: passive/no-op except skip counting

Propagation:

- memodes receive direct feedback first
- constituent memes inherit a scaled signal
- feedback itself is re-ingested into the graph as behavior-domain material
