import { describe, expect, test } from "vitest";
import { add, subtract } from "./math.js";

describe("math functions", () => {
  test("addition", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("subtraction", () => {
    expect(subtract(7, 4)).toBe(3);
  });
  test("subtraction to be negative", () => {
    expect(subtract(2, 7)).toBe(-5);
  });
  test("Output should be a number", () => {
    //better way
    expect(add(3, 5)).toBeTypeOf("number");
    expect(typeof subtract(5, 4)).toBe("number");
  });
});
