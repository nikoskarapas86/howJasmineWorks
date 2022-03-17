import numbers from "../../utilities/numbers";

describe("Tests for numbers utilities", () => {
  it("should be a sum greater than 10", () => {
    expect(numbers.sum(3, 10)).toBeGreaterThan(10);
  });

  it("should be a sum equal to13", () => {
    expect(numbers.sum(3, 10)).toEqual(13);
  });

  it("should be a multiply equal to 30", () => {
    expect(numbers.multiply(3, 10)).toEqual(30);
  });

  it("should be a subtract equal to 30", () => {
    expect(numbers.subtract(40, 10)).toEqual(30);
  });
});
