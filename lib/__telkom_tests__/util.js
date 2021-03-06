"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTestClientWithPrivateKey = exports.initTestClient = void 0;
var subproviders_1 = require("@0x/subproviders");
var Web3 = __importStar(require("web3"));
var web3_provider_engine_1 = __importDefault(require("web3-provider-engine"));
var rpc_1 = __importDefault(require("web3-provider-engine/subproviders/rpc"));
var types_1 = require("wyvern-js/lib/types");
var seaport_1 = require("../seaport");
var utils_1 = require("../utils");
function initTestClient() {
    var rpcUrl = "https://rpc.telkombc.id/";
    var provider = new Web3.providers.HttpProvider(rpcUrl);
    var apiConfig = {
        networkName: types_1.Network.Rinkeby,
        apiBaseUrl: "http://localhost:3000",
    };
    var wyvernProtocolConfig = {
        network: types_1.Network.Rinkeby,
        gasPrice: (0, utils_1.makeBigNumber)(0),
        wyvernExchangeContractAddress: "0xb3b9928baa49cb300c094df5ab00e533dfaaea13",
        wyvernProxyRegistryContractAddress: "0x261f9ea8194473f8a4c6100c072504260d5b5b21",
        wyvernDAOContractAddress: "0x7bca8463b8785b37e6d28674bf024de95bc3743c",
        wyvernTokenContractAddress: "0x70cbcde98bc2f8d9a6ff31796df765d31c02efb9",
        wyvernAtomicizerContractAddress: "0x81adf61dfb9f605d652b2c9f403e3e943d8e8dc8",
        wyvernTokenTransferProxyAddress: "0x5c9e780ae952d17e7607a56492b8e59b87ea4752",
    };
    var client = new seaport_1.OpenSeaPort(provider, apiConfig, wyvernProtocolConfig);
    return client;
}
exports.initTestClient = initTestClient;
function initTestClientWithPrivateKey(privateKey) {
    var rpcUrl = "https://rpc.telkombc.id/";
    var rpcSubprovider = new rpc_1.default({
        rpcUrl: rpcUrl,
    });
    var privateKeyProvider = new subproviders_1.PrivateKeyWalletSubprovider(privateKey);
    var providerEngine = new web3_provider_engine_1.default();
    providerEngine.addProvider(rpcSubprovider);
    providerEngine.addProvider(privateKeyProvider);
    providerEngine.start();
    var apiConfig = {
        networkName: types_1.Network.Rinkeby,
        apiBaseUrl: "http://localhost:3000",
    };
    var wyvernProtocolConfig = {
        network: types_1.Network.Rinkeby,
        gasPrice: (0, utils_1.makeBigNumber)(0),
        wyvernExchangeContractAddress: "0xb3b9928baa49cb300c094df5ab00e533dfaaea13",
        wyvernProxyRegistryContractAddress: "0x261f9ea8194473f8a4c6100c072504260d5b5b21",
        wyvernDAOContractAddress: "0x7bca8463b8785b37e6d28674bf024de95bc3743c",
        wyvernTokenContractAddress: "0x70cbcde98bc2f8d9a6ff31796df765d31c02efb9",
        wyvernAtomicizerContractAddress: "0x81adf61dfb9f605d652b2c9f403e3e943d8e8dc8",
        wyvernTokenTransferProxyAddress: "0x5c9e780ae952d17e7607a56492b8e59b87ea4752",
    };
    var client = new seaport_1.OpenSeaPort(providerEngine, apiConfig, wyvernProtocolConfig);
    return client;
}
exports.initTestClientWithPrivateKey = initTestClientWithPrivateKey;
//# sourceMappingURL=util.js.map