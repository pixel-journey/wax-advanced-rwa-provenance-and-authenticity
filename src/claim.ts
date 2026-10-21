/**
 * Whether a claimed account is the last owner in a list.
 * The list is an argument. History is not walked.
 */

const NAME = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z1-5.]{1,12}$/;

export function matches(owners: readonly string[], claimed: string): { matches: boolean } {
  if (owners.length < 1 || owners.length > 12) throw new Error("pass 1 to 12 owners");
  if (!NAME.test(claimed)) throw new Error("claimed is not an account");
  for (const owner of owners) {
    if (!NAME.test(owner)) throw new Error(`${owner} is not an account`);
  }
  return { matches: owners[owners.length - 1] === claimed };
}
