import { assert } from "chai";
import { suite, test } from "mocha";
import * as Web3 from "web3";
import { Network } from "wyvern-js/lib/types";
import { OpenSeaPort, SelasarWyvernProtocolConfig } from "../seaport";
import { makeBigNumber } from "../utils";

const rpcUrl = "https://rpc.telkombc.id/";
const provider = new Web3.providers.HttpProvider(rpcUrl);

const apiConfig = {
  networkName: Network.Rinkeby, // FIXME: WyvernProtocol uses rinkeby network to fetch schemas
  apiBaseUrl: "http://localhost:3000",
};

const wyvernProtocolConfig: SelasarWyvernProtocolConfig = {
  network: Network.Rinkeby, // FIXME: WyvernProtocol uses rinkeby network to fetch schemas
  gasPrice: makeBigNumber(0),
  wyvernExchangeContractAddress: "0xb3b9928baa49cb300c094df5ab00e533dfaaea13",
  wyvernProxyRegistryContractAddress:
    "0x261f9ea8194473f8a4c6100c072504260d5b5b21",
  wyvernDAOContractAddress: "0x7bca8463b8785b37e6d28674bf024de95bc3743c",
  wyvernTokenContractAddress: "0x70cbcde98bc2f8d9a6ff31796df765d31c02efb9",
  wyvernAtomicizerContractAddress: "0x81adf61dfb9f605d652b2c9f403e3e943d8e8dc8",
  wyvernTokenTransferProxyAddress: "0x5c9e780ae952d17e7607a56492b8e59b87ea4752",
};

const client = new OpenSeaPort(provider, apiConfig, wyvernProtocolConfig);

suite("instantiate", () => {
  test("OpenSeaPort should receive wyvernProtocolConfig for custom WyvernProtocol contract addresses", () => {
    const contractInterfaces = {
      wyvernExchange: {
        interface: { ...client._wyvernProtocol.wyvernExchange },
        address: wyvernProtocolConfig.wyvernExchangeContractAddress,
      },
      wyvernProxyRegistry: {
        interface: { ...client._wyvernProtocol.wyvernProxyRegistry },
        address: wyvernProtocolConfig.wyvernProxyRegistryContractAddress,
      },
      wyvernDAO: {
        interface: { ...client._wyvernProtocol.wyvernDAO },
        address: wyvernProtocolConfig.wyvernDAOContractAddress,
      },
      wyvernToken: {
        interface: { ...client._wyvernProtocol.wyvernToken },
        address: wyvernProtocolConfig.wyvernTokenContractAddress,
      },
      wyvernAtomicizer: {
        interface: { ...client._wyvernProtocol.wyvernAtomicizer },
        address: wyvernProtocolConfig.wyvernAtomicizerContractAddress,
      },
    };

    for (const [interfaceKey, obj] of Object.entries(contractInterfaces)) {
      let address = "";
      for (const [key, val] of Object.entries(obj.interface)) {
        if (key == "web3ContractInstance") {
          address = val.address;
        }
      }
      assert.equal(
        address,
        (wyvernProtocolConfig as unknown as { [key: string]: number | string })[
          `${interfaceKey}ContractAddress`
        ]
      );
    }
  });

  test("OpenSeaApi in OpenSeaPort can receive custom base url", () => {
    assert.equal(client.api.apiBaseUrl, apiConfig.apiBaseUrl);
  });
});
