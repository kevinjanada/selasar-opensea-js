var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { assert } from "chai";
import { suite, test } from "mocha";
import * as Web3 from "web3";
import { Network } from "wyvern-js/lib/types";
import { OpenSeaPort } from "../seaport";
import { makeBigNumber } from "../utils";
const rpcUrl = "https://rpc.telkombc.id/";
const provider = new Web3.providers.HttpProvider(rpcUrl);
const apiConfig = {
    apiBaseUrl: "http://localhost:3000", // use localhost backend for testing
};
const wyvernProtocolConfig = {
    network: Network.Rinkeby,
    gasPrice: makeBigNumber(0),
    wyvernExchangeContractAddress: "0xb3b9928baa49cb300c094df5ab00e533dfaaea13",
    wyvernProxyRegistryContractAddress: "0x261f9ea8194473f8a4c6100c072504260d5b5b21",
    wyvernDAOContractAddress: "0x7bca8463b8785b37e6d28674bf024de95bc3743c",
    wyvernTokenContractAddress: "0x70cbcde98bc2f8d9a6ff31796df765d31c02efb9",
    wyvernAtomicizerContractAddress: "0x81adf61dfb9f605d652b2c9f403e3e943d8e8dc8",
};
const client = new OpenSeaPort(provider, apiConfig, wyvernProtocolConfig);
suite("api", () => {
    test("getAsset", () => __awaiter(void 0, void 0, void 0, function* () {
        const tokenAddress = "0x38318EBd389D0913834b7183892D1FcdC7a6b473";
        const tokenId = "1";
        const asset = yield client.api.getAsset({
            tokenAddress,
            tokenId,
        });
        assert.equal(asset.tokenAddress, tokenAddress);
        assert.equal(asset.tokenId, tokenId);
    }));
});
//# sourceMappingURL=api.js.map