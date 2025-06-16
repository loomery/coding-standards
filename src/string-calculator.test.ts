import { describe, it, expect } from "vitest";
import { sumCommaSeparatedNumbers } from "./string-calculator";

describe("String Calculator", () => {
  it("should return 0 for empty string", () => {
    expect(sumCommaSeparatedNumbers("")).toBe(0);
  });
  it("should return number for single number", () => {
    expect(sumCommaSeparatedNumbers("1")).toBe(1);
  });
  it("should return sum for two numbers", () => {
    expect(sumCommaSeparatedNumbers("1,2")).toBe(3);
  });
  it("should return sum for multiple numbers", () => {
    expect(sumCommaSeparatedNumbers("1,2,3")).toBe(6);
  });
});
