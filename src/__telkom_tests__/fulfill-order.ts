import { suite, test } from "mocha";
//import { assert } from "chai";
import { OrderSide } from "../types";
import { initTestClientWithPrivateKey } from "./util";

suite("fulfillOrder", () => {
  test("fulfillOrder", async () => {
    const buyerAddress = "0xF07aec38A9725E359c4DDA98E5f92d1CE0739173";
    const buyerPrivateKey =
      "aa5c8b2f822c753a253799bfb3467b57016c41fd778f6beb33108c944a3f66e3";
    const client = initTestClientWithPrivateKey(buyerPrivateKey);

    const order = await client.api.getOrder({
      side: OrderSide.Sell,
      assetContractAddress:
        "0x85ff017e826d6a9ed31c953575cd4bc438eedafb".toLowerCase(),
      paymentTokenAddress: "0x0000000000000000000000000000000000000000",
      tokenId: "2",
      basePrice: "1000000000000000000",
    });

    const res = await client.fulfillOrder({
      order,
      accountAddress: buyerAddress,
    });
    console.log(res);
  });
});
