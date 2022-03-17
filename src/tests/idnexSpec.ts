import arrays from "../utilities/arrays";
import numbers from "../utilities/numbers";
import countries from "../utilities/regions";
import strings from "../utilities/strings";
const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];

it("should capitalize a string", () => {
  expect(strings.capitalize("a sentence")).toEqual("A Sentence");
});
describe("test the uppercase function", () => {
  it("should uppercase a string", () => {
    expect(strings.upperCase("sentence")).toBe("SENTENCE");
  });
});
describe("test the lowercase function", () => {
  it("should lowercase a string", () => {
    expect(strings.lowerCase("SENTENCE")).toBe("sentence");
  });
});
describe("test the concat function", () => {
  it("should concat two strings", () => {
    expect(strings.concat("hello", " world")).toBe("hello world");
  });
});
describe("test the sum function", () => {
  it("should be a sum greater than 10", () => {
    expect(numbers.sum(3, 10)).toBeGreaterThan(10);
  });
});
describe("test the sum function", () => {
  it("should be a sum equal to13", () => {
    expect(numbers.sum(3, 10)).toEqual(13);
  });
});
describe("test the multiply function", () => {
  it("should be a multiply equal to 30", () => {
    expect(numbers.multiply(3, 10)).toEqual(30);
  });
});
describe("test the subtract function", () => {
  it("should be a subtract equal to 30", () => {
    expect(numbers.subtract(40, 10)).toEqual(30);
  });
});
describe("test the addArr function", () => {
  it("should add numbers in array and be truthy", () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
  });
});
describe("test the concatenate function", () => {
  it("should concatenate 2 arrays to not equal just 1", () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
  });
});
it("should get basic data on the country canada", async () => {
  const data = await countries.getCountry('canada');
  expect(data).toEqual({
    capital: 'Ottawa',
    region: 'Americas',
    numericCode: '124'
  });
});