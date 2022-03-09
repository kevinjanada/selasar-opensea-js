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
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
//import { assert } from "chai";
var types_1 = require("../types");
var util_1 = require("./util");
(0, mocha_1.suite)("fulfillOrder", function () {
    (0, mocha_1.test)("fulfillOrder", function () { return __awaiter(void 0, void 0, void 0, function () {
        var buyerAddress, buyerPrivateKey, client, order, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    buyerAddress = "0xF07aec38A9725E359c4DDA98E5f92d1CE0739173";
                    buyerPrivateKey = "aa5c8b2f822c753a253799bfb3467b57016c41fd778f6beb33108c944a3f66e3";
                    client = (0, util_1.initTestClientWithPrivateKey)(buyerPrivateKey);
                    return [4 /*yield*/, client.api.getOrder({
                            side: types_1.OrderSide.Sell,
                            assetContractAddress: "0x85ff017e826d6a9ed31c953575cd4bc438eedafb".toLowerCase(),
                            paymentTokenAddress: "0x0000000000000000000000000000000000000000",
                            tokenId: "2",
                            basePrice: "1000000000000000000",
                        })];
                case 1:
                    order = _a.sent();
                    return [4 /*yield*/, client.fulfillOrder({
                            order: order,
                            accountAddress: buyerAddress,
                        })];
                case 2:
                    res = _a.sent();
                    console.log(res);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=fulfill-order.js.map