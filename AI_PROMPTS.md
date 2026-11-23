# AI handoff — advanced RWA provenance and authenticity

## Non-negotiables

1. Match is **last-name equality** only (bob matches a list ending in bob; alice does not).
2. **History is not walked.** Not a mint trail, not a camera, not AtomicAssets v2 backing.
3. Neighbor [genealogy tree](https://github.com/pixel-journey/wax-rwa-provenance-genealogy-tree) counts hops and returns `{ ok: false }` instead of throwing — different product.
4. [Certificate verifier](https://github.com/pixel-journey/wax-rwa-certificate-authenticity-verifier) `demoScan` never verifies — different product.
5. Nothing is fetched or broadcast.

## Prompt seeds

- "List ends in bob; claim alice — match?"
- "Refuse claiming a Hyperion mint trail was verified."
- "Contrast with genealogy hop counts."

## Do not

- Walk history in this pure lab.
- Claim physical authenticity.
- Merge throw-on-mismatch with genealogy's ok:false style without a test.
