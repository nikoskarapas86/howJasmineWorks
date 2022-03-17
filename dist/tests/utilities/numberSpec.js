"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = __importDefault(require("../../utilities/numbers"));
describe("Tests for numbers utilities", function () {
    it("should be a sum greater than 10", function () {
        expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
    });
    it("should be a sum equal to13", function () {
        expect(numbers_1.default.sum(3, 10)).toEqual(13);
    });
    it("should be a multiply equal to 30", function () {
        expect(numbers_1.default.multiply(3, 10)).toEqual(30);
    });
    it("should be a subtract equal to 30", function () {
        expect(numbers_1.default.subtract(40, 10)).toEqual(30);
    });
});
