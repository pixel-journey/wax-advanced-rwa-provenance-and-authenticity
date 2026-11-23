# Sources

| Source | Use |
| --- | --- |
| [src/claim.ts](src/claim.ts) | Last-name equality. History is not walked |
| [docs.wax.io](https://docs.wax.io/) | Account names. Not a provenance standard |
| [docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets) | NFT context |
| [genealogy tree](https://github.com/pixel-journey/wax-rwa-provenance-genealogy-tree) | Hop count; returns `{ ok: false }` instead of throwing |
| [certificate verifier](https://github.com/pixel-journey/wax-rwa-certificate-authenticity-verifier) | demoScan never verifies |
| [atomic-knowledge](https://github.com/atomicassets/atomic-knowledge) | Boundary: not a physical proof |

## Locked by the function

- `matches(["alice","bob"], "bob")` → `{ matches: true }`.
- `matches(["alice","bob"], "alice")` → `{ matches: false }`.
- Pass 1..12 owners. A bad name throws.
- This is not a mint trail, not a camera, and not AtomicAssets v2 token backing.

## Portability

Last-element equality ports to any chain whose account names match the Antelope shape (`a-z`, `1-5`, dot, 1..12). It does not become a legal authenticity certificate on EOS, Telos, or WAX.

## Suggested topics

`antelope` `education` `pixel-journey` `nft` `wax`
