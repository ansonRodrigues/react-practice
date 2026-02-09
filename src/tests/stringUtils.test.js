import { describe, expect, test } from "vitest";
import { isEmpty, toUpperCase } from "./stringUtils";

describe("String Utils", () => {
  test("converts string toUppercase", () => {
    expect(toUpperCase("Brendon")).toBe("BRENDON");
  });
  test("returns true for empty sting and false for non-empty string", () => {
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty("Anson")).toBeFalsy();
  });
});
