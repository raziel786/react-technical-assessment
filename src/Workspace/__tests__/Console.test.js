import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Console from "../Console";

describe("When the Console component is rendered with no fileName selected", () => {
  it("Then text will appear asking the user to `select a file`", () => {
    render(<Console />);
    const input = screen.getByText("Please select a file");
    expect(input).toBeInTheDocument();
  });
});
