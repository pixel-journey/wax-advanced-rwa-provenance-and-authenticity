# Security — last-name equality

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Last element equals claim | `{ matches: true }` |
| Otherwise | `{ matches: false }` or throw on bad name |
| History | not walked |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Mint trail | Not verified |
| Camera / physical tag | Not verified |
| Legal certificate | Forbidden |

## Attack angles

1. Calling a match "authenticated on chain".  
2. Walking Hyperion and claiming this function did it.  
3. Merging with genealogy hop API without tests.

## Honesty limits

String equality on a caller-supplied list only.

[docs.wax.io](https://docs.wax.io/)
