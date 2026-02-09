import { describe, expect } from "vitest";
import Dropdownsec from "./Dropdownsec";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

const mockOptions = [
  { label: "Aamon", value: "AM" },
  { label: "Gusion", value: "GS" },
];

describe("Dropdown component", () => {
  test("label should render correctly", () => {
    render(
      <Dropdownsec
        label="Hero"
        options={mockOptions}
        value=""
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("Hero")).toBeInTheDocument();
  });
});
