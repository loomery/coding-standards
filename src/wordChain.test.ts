import { describe, it, expect } from "vitest";
import { isValidChain } from "./wordChain";

describe("Word Chain Kata", () => {
  describe("isValidChain", () => {
    it("should return false for empty chain", () => {
      expect(isValidChain([])).toBe(false);
    });
    it("should return true for single word chain", () => {
      expect(isValidChain(["cat"])).toBe(true);
    });
    it("should return false for chain with uppercase letters", () => {
      expect(isValidChain(["cat", "Cat", "cot"])).toBe(false);
    });
    it("should return false for words with different lengths", () => {
      expect(isValidChain(["cat", "cot", "dots"])).toBe(false);
    });
    it("should return false for chain with more than one letter difference", () => {
      expect(isValidChain(["cat", "cot", "dog"])).toBe(false);
    });
    it("should return true for a valid chain with one letter difference", () => {
      expect(isValidChain(["cat", "cot", "dot"])).toBe(true);
    });
  });

  describe("findNextWord", () => {
    it.todo("should return empty array for empty word");
    it.todo("should only return words with same length");
    it.todo("should find all possible next words with one letter difference");
  });
});
