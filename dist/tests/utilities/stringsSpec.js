"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = __importDefault(require("../../utilities/strings"));
describe("Tests for Strings utilities", function () {
    it("should capitalize a string", function () {
        expect(strings_1.default.capitalize("a sentence")).toEqual("A Sentence");
    });
    it("should uppercase a string", function () {
        expect(strings_1.default.upperCase("sentence")).toBe("SENTENCE");
    });
    it("should lowercase a string", function () {
        expect(strings_1.default.lowerCase("SENTENCE")).toBe("sentence");
    });
    it("should concat two strings", function () {
        expect(strings_1.default.concat("hello", " world")).toBe("hello world");
    });
});
