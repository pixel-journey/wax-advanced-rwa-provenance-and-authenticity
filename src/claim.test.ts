import { describe, expect, it } from "vitest";
import { matches } from "./claim";

describe("claimed owner", () => {
  it("matches only the last name", () => {
    expect(matches(["alice", "bob"], "bob")).toEqual({ matches: true });
    expect(matches(["alice", "bob"], "alice")).toEqual({ matches: false });
  });
});
