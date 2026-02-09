import { expect, vi } from "vitest";
import Dropdownsec from "./Dropdownsec";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
        //placeholder="Select Shoes"
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  test("shows all options correctly", async () => {
    const user = userEvent.setup();
    render(
      <Dropdownsec
        label="Shoes"
        value=""
        options={mockOptions}
        onChange={() => {}}
      />,
    );

    const select = screen.getByRole("combobox");
    //fireEvent.mouseDown(select);
    //async way
    await user.click(select);

    expect(await screen.findByText("Nike")).toBeInTheDocument();
    expect(await screen.findByText("Adidas")).toBeInTheDocument();
  });

  test("Calls onChange when opton is selected", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Dropdownsec
        label="Shoes"
        value=""
        options={mockOptions}
        onChange={handleChange}
      />,
    );

    const select = screen.getByRole("combobox");
    await user.click(select);
    await user.click(screen.getByText("Nike"));
    expect(handleChange).toHaveBeenCalled();
  });

  test("check if disabled works", () => {
    render(
      <Dropdownsec
        label="Shoes"
        value=""
        options={mockOptions}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("combobox")).toBeDisabled;
  });
});
