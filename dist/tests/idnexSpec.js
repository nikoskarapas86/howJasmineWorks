"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
var numArr = [3, 4, 5, 6];
var wordArr = ["cat", "dog", "rabbit", "bird"];
it("should capitalize a string", function () {
    expect(strings_1.default.capitalize("a sentence")).toEqual("A Sentence");
});
describe("test the uppercase function", function () {
    it("should uppercase a string", function () {
        expect(strings_1.default.upperCase("sentence")).toBe("SENTENCE");
    });
});
describe("test the lowercase function", function () {
    it("should lowercase a string", function () {
        expect(strings_1.default.lowerCase("SENTENCE")).toBe("sentence");
    });
});
describe("test the concat function", function () {
    it("should concat two strings", function () {
        expect(strings_1.default.concat("hello", " world")).toBe("hello world");
    });
});
describe("test the sum function", function () {
    it("should be a sum greater than 10", function () {
        expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
    });
});
describe("test the sum function", function () {
    it("should be a sum equal to13", function () {
        expect(numbers_1.default.sum(3, 10)).toEqual(13);
    });
});
describe("test the multiply function", function () {
    it("should be a multiply equal to 30", function () {
        expect(numbers_1.default.multiply(3, 10)).toEqual(30);
    });
});
describe("test the subtract function", function () {
    it("should be a subtract equal to 30", function () {
        expect(numbers_1.default.subtract(40, 10)).toEqual(30);
    });
});
describe("test the addArr function", function () {
    it("should add numbers in array and be truthy", function () {
        expect(arrays_1.default.addArr(numArr)).toBeTruthy();
    });
});
describe("test the concatenate function", function () {
    it("should concatenate 2 arrays to not equal just 1", function () {
        expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
    });
});
