var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import { assert } from "chai";
import { suite, test } from "mocha";
import { initTestClient } from "./util";
suite("createSellOrder", () => {
    test("createSellOrder", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = initTestClient();
        const listing = yield client.createSellOrder({
            asset: {
                tokenAddress: "0x38318EBd389D0913834b7183892D1FcdC7a6b473",
                tokenId: "1",
            },
            accountAddress: "0xB23d3c297E98dD641F999A4ad5e3b57d66a40f1c",
            startAmount: 3,
            expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * 24),
        });
        console.log(listing);
    }));
});
//# sourceMappingURL=create-sell-order.js.map