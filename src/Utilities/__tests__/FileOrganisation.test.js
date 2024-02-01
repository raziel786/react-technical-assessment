import { getFileNames, generateFileTree } from "../FileOrganisation";

const fileNames = [
  "App.tsx",
  "Widget.tsx",
  "WidgetList.tsx",
  "clearanceWidgets.js",
  "discontinuedWidgets.js",
  "featuredWidgets.js",
  "index.html",
  "style.css",
];

describe("When the function `getFileNames` function is called", () => {
  it("Then the Array from `getFileNames` function will match `fileNames` Array", () => {
    expect(getFileNames()).toEqual(fileNames);
  });
});

describe("When the function `generateFileTree` function is called", () => {
  it("Then the property `name` to exist", () => {
    expect(generateFileTree()).toHaveProperty("name");
  });
  it("Then expect the first node of `name` to be `app`", () => {
    const { name } = generateFileTree();
    expect(name).toBe("app");
  });
  it("Then the property `index` to exist", () => {
    expect(generateFileTree()).toHaveProperty("name");
  });
  it("Then the first node of `index` to be `0`", () => {
    const { index } = generateFileTree();
    expect(index).toBe(0);
  });
  it("Then the property `children` to exist", () => {
    expect(generateFileTree()).toHaveProperty("children");
  });
});
