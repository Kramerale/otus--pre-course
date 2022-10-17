import { multiply } from "./data_types-multiply";
import { sumLength } from "./data_types-sumlength";
import { sumNum } from "./data_types-sumnum";

describe("multiply", () => {
  it("multiply numbers", () => {
    jest.spyOn(console, "log");
    multiply(3, 2);
    expect(console.log).toHaveBeenCalledWith(6);
  });
});

describe("sumLength", () => {
  it("console.log length of two strings", () => {
    jest.spyOn(console, "log");
    sumLength("Hello", "World");
    expect(console.log).toHaveBeenCalledWith(
      "Суммарное количество символов: 10"
    );
  });
});

// describe("sumLength", () => {
//   it("console.log length of two strings", () => {
//     jest.spyOn(console, 'log');
//     sumLength('Hello', 'World');
//     expect(console.log).toHaveBeenCalledWith('Суммарное количество символов: 10');
//   });
// });
