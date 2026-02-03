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
        vlaue=""
        options={mockOptions}
        placeholder="Select Shoes"
        onChange={() => {}}
      />,
    );
  });
});
