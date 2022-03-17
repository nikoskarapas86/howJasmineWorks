"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../../utilities/arrays"));
describe("Tests for array utilities", function () {
    var numArr = [3, 4, 5, 6];
    var wordArr = ["cat", "dog", "rabbit", "bird"];
    it("should add numbers in array and be truthy", function () {
        expect(arrays_1.default.addArr(numArr)).toBeTruthy();
    });
    it("should concatenate 2 arrays to not equal just 1", function () {
        expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
    });
});
