/**
 * This file is used to arbitrarily test the opensea-js library
 * */
import * as dotenv from "dotenv";
import Web3 from "web3";
import { Network } from "wyvern-js/lib/types";
import { OpenSeaPort, SelasarWyvernProtocolConfig } from "./seaport";
import { makeBigNumber } from "./utils";
//import { WyvernProtocol } from "wyvern-js"
dotenv.config();

const rpcUrl = "https://rpc.telkombc.id/";
const provider = new Web3.providers.HttpProvider(rpcUrl);
/*
const wyvernProtocol = new WyvernProtocol(provider, {
  network: Network.Rinkeby
});
*/

//const wyvernProtocolConfig: WyvernProtocolConfig = {
const wyvernProtocolConfig: SelasarWyvernProtocolConfig = {
  network: Network.Rinkeby, //
  gasPrice: makeBigNumber(0),
  wyvernExchangeContractAddress: "0xb3b9928baa49cb300c094df5ab00e533dfaaea13",
  wyvernProxyRegistryContractAddress:
    "0x261f9ea8194473f8a4c6100c072504260d5b5b21",
  wyvernDAOContractAddress: "0x7bca8463b8785b37e6d28674bf024de95bc3743c",
  wyvernTokenContractAddress: "0x70cbcde98bc2f8d9a6ff31796df765d31c02efb9",
  wyvernAtomicizerContractAddress: "0x81adf61dfb9f605d652b2c9f403e3e943d8e8dc8",
  wyvernTokenTransferProxyAddress: "0x5c9e780ae952d17e7607a56492b8e59b87ea4752",
};
//const wyvernProtocol = new WyvernProtocol(wyvernProtocolConfig)

/**
 * TODO:
 * - [x] Instantiate seaport with web3 that connects to telkom rpc
 * - [x] Wyvernprotocol should connect to telkom deployed wyvern contracts
 * - [x] OpenSeaAPI should connect to telkom backend
 * */
async function main() {
  const apiConfig = {
    apiBaseUrl: "http://localhost:3000",
  };
  const seaport = new OpenSeaPort(provider, apiConfig, wyvernProtocolConfig);

  const asset = seaport.api.getAsset({
    tokenAddress: "",
    tokenId: "",
  });

  console.log(asset);
}

main();
