import arrays from "../../utilities/arrays";
describe("Tests for array utilities", () => {
  const numArr = [3, 4, 5, 6];
  const wordArr = ["cat", "dog", "rabbit", "bird"];
  it("should add numbers in array and be truthy", () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
  });
  it("should concatenate 2 arrays to not equal just 1", () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
  });
});
