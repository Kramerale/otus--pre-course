import { multiply } from "./data_types";

describe("multiply", () => {
    it("multiply numbers", () => {
        expect(multiply(2, 3)).toEqual(6);
    });
});