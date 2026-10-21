"use client";

import { matches } from "./claim";

export function Demo() {
  const yes = matches(["alice", "bob"], "bob");
  const no = matches(["alice", "bob"], "alice");
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>The claim has to be the last name</h1>
      <p className="lede">bob matches. alice does not, even though alice is in the list. The list was not read from a transfer history.</p>
      <p>
        bob {String(yes.matches)}. alice {String(no.matches)}.
      </p>
    </main>
  );
}
