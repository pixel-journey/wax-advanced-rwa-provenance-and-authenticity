# Education — the last name, or not

> **Rung:** `npm test` runs `src/claim.test.ts`.  
> **The test is the rule.** History is not walked.

`matches(owners, claimed)` returns `{ matches: boolean }`. The claimed account must equal `owners[owners.length - 1]`. Being earlier in the list is not a match.

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Predict bob versus alice on a two-name list |
| Intermediate | See that bad input throws, unlike `lineage` |
| Masterclass | Refuse to call this a mint trail or a certificate |

---

## Beginner — one scene

```ts
matches(["alice", "bob"], "bob");
// { matches: true }

matches(["alice", "bob"], "alice");
// { matches: false }
```

Length must be 1 to 12. Every name, including `claimed`, must pass the account regex (`a-z`, `1-5`, dots, no `..`, no leading or trailing dot, at most 12). A failure throws `Error`. It does not return `{ ok: false }`.

The thrown messages are `"pass 1 to 12 owners"`, `"claimed is not an account"`, and `` `${owner} is not an account` ``. The test file does not assert those strings. Do not pretend it does.

### Predict, then run

```bash
npm test
```

---

## Intermediate — last means last

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Match any previous owner | `includes` | index `length - 1` only | alice is false |
| Return a soft `{ ok: false }` for `Alice` | lineage style | `throw new Error` | not asserted; the `throw` is in `claim.ts` |
| Walk transfers until the name appears | Hyperion | the array you passed | no fetch in `claim.ts` |
| Treat `matches: true` as custody | a signature | string equality on the last element | bob |

The page prints both booleans for the same two calls. It does not load an asset.

---

## Masterclass — do not staple this to a camera

`wax-rwa-provenance-genealogy-tree` `lineage` counts hops and returns `{ ok: false }` for an immediate repeat. alice → bob → alice is 2 hops there. This file would say alice matches that list, because alice is last, and would say bob does not. Same names, opposite questions.

`wax-rwa-certificate-authenticity-verifier` does not call `matches`. Its `demoScan()` returns `verified: false` because there is no camera and no AtomicAssets row.

AtomicMarket and AtomicAssets v2 do not define an authenticity action in this repo. Nothing here is `createbuyo`, `transfer`, or `backasset`. Native backing stays deprecated. A last-name check is not a holder airdrop.

### What this course will not teach

- A provenance proof, a signature, or a physical-tag match
- The throw messages as tested behavior
- Native NFT backing
