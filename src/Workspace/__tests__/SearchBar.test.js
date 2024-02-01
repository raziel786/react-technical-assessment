import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "../Components/SearchBar";

const props = {
  value: "search test",
  onFocus: () => jest.fn,
  onBlur: () => jest.fn,
  onClear: () => jest.fn,
  onChange: () => jest.fn,
};

describe("When the SearchBar component is rendered", () => {
  render(<SearchBar {...props} />);
  it("Then expect the contents to be rendered", () => {
    const searchBar = screen.getByLabelText("search-bar");
    expect(searchBar).not.toBeNull();
  });
});
