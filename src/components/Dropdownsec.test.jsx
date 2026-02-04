import { expect } from "vitest";
import Dropdownsec from "./Dropdownsec";
import { render, screen } from "@testing-library/react";

const mockOptions = [
  {
    value: "NK",
    label: "Nike",
  },
  {
    value: "AD",
    label: "Adidas",
  },
];

describe("Dropdownsec Component", () => {
  test("should render label", () => {
    render(
      <Dropdownsec
        label="Shoes"
        value=""
        options={mockOptions}
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("Shoes")).toBeInTheDocument();
  });

  test("should render placeholder", () => {
    render(
      <Dropdownsec
        label="Shoes"
        value=""
        options={mockOptions}
        placeholder="Select Shoes"
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("Select Shoes")).toBeInTheDocument();
  });

  test("shows helper text when provided", () => {
    render(
      <Dropdownsec
        label="Shoes"
        value=""
        helperText="This field is required"
        options={mockOptions}
        placeholder="Select Shoes"
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });
});
