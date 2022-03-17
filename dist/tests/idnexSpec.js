"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var regions_1 = __importDefault(require("../utilities/regions"));
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
it("should get basic data on the country canada", function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, regions_1.default.getCountry('canada')];
            case 1:
                data = _a.sent();
                expect(data).toEqual({
                    capital: 'Ottawa',
                    region: 'Americas',
                    numericCode: '124'
                });
                return [2 /*return*/];
        }
    });
}); });
