import { describe, expect, test } from "vitest";
import { getFirstItem } from "./arrayUtils";

describe("Array utils", () => {
  test("First item gives correct output", () => {
    expect(getFirstItem([69, 22, 45, 78])).toBe(69);
  });
  test("Return undefined when array is empty", () => {
    expect(getFirstItem([])).toBeUndefined();
  });
  test("Works with array of string", () => {
    expect(getFirstItem(["a", "b", "c"])).toBe("a");
  });
});
