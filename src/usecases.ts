import { HISTORY_ORIGIN, historyActions } from "./api";
import { matches } from "./claim";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const yes = matches(["alice", "bob"], "bob");

export const USE_CASES: UseCase[] = [
  {
    title: "Transfer history is not this list",
    detail: `bob matches the last name (${String(yes.matches)}). alice does not. Hyperion is not walked.`,
    request: historyActions(HISTORY_ORIGIN, "alice", "atomicassets:transfer", 20),
    transaction: null,
  },
  {
    title: "A second account is still not proof",
    detail: "No transfer is built from a match.",
    request: historyActions(HISTORY_ORIGIN, "bob", "atomicassets:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (!yes.matches || matches(["alice", "bob"], "alice").matches) throw new Error("claim");
}
