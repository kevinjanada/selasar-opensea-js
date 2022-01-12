//import { assert } from "chai";
import { suite, test } from "mocha";
import { initTestClient } from "./util";

suite("createSellOrder", () => {
  test("createSellOrder", async () => {
    const client = initTestClient();

    const listing = await client.createSellOrder({
      asset: {
        tokenAddress: "0x38318EBd389D0913834b7183892D1FcdC7a6b473",
        tokenId: "1",
      },
      accountAddress: "0xB23d3c297E98dD641F999A4ad5e3b57d66a40f1c",
      startAmount: 3,
      expirationTime: Math.round(Date.now() / 1000 + 60 * 60 * 24),
    });

    console.log(listing);
  });
});
