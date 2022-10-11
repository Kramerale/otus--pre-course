import { multiply } from "./data_types";

describe("multiply", () => {
  it("multiply numbers", () => {
    expect(multiply(3, 2)).toEqual(6);
  });
});
