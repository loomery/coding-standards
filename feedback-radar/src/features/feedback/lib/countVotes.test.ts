import { describe, it, expect } from "vitest";
import { countVotes } from "./countVotes";

describe("countVotes", () => {
  it("returns 0 for empty list", () => {
    expect(countVotes([])).toBe(0);
  });
  it("sums 'votes' fields", () => {
    expect(countVotes([{ id: "1", votes: 2 }, { id: "2", votes: 3 }])).toBe(5);
  });
  it("ignores negative values", () => {
    expect(countVotes([{ id: "1", votes: -1 }, { id: "2", votes: 4 }])).toBe(4);
  });
});
