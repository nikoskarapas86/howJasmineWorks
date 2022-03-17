import strings from "../../utilities/strings";
describe("Tests for Strings utilities", () => {
  it("should capitalize a string", () => {
    expect(strings.capitalize("a sentence")).toEqual("A Sentence");
  });

  it("should uppercase a string", () => {
    expect(strings.upperCase("sentence")).toBe("SENTENCE");
  });

  it("should lowercase a string", () => {
    expect(strings.lowerCase("SENTENCE")).toBe("sentence");
  });

  it("should concat two strings", () => {
    expect(strings.concat("hello", " world")).toBe("hello world");
  });
});
