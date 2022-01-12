"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var mocha_1 = require("mocha");
var Web3 = __importStar(require("web3"));
var types_1 = require("wyvern-js/lib/types");
var seaport_1 = require("../seaport");
var utils_1 = require("../utils");
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
};
var client = new seaport_1.OpenSeaPort(provider, apiConfig, wyvernProtocolConfig);
(0, mocha_1.suite)("instantiate", function () {
    (0, mocha_1.test)("OpenSeaPort should receive wyvernProtocolConfig for custom WyvernProtocol contract addresses", function () {
        var contractInterfaces = {
            wyvernExchange: {
                interface: __assign({}, client._wyvernProtocol.wyvernExchange),
                address: wyvernProtocolConfig.wyvernExchangeContractAddress,
            },
            wyvernProxyRegistry: {
                interface: __assign({}, client._wyvernProtocol.wyvernProxyRegistry),
                address: wyvernProtocolConfig.wyvernProxyRegistryContractAddress,
            },
            wyvernDAO: {
                interface: __assign({}, client._wyvernProtocol.wyvernDAO),
                address: wyvernProtocolConfig.wyvernDAOContractAddress,
            },
            wyvernToken: {
                interface: __assign({}, client._wyvernProtocol.wyvernToken),
                address: wyvernProtocolConfig.wyvernTokenContractAddress,
            },
            wyvernAtomicizer: {
                interface: __assign({}, client._wyvernProtocol.wyvernAtomicizer),
                address: wyvernProtocolConfig.wyvernAtomicizerContractAddress,
            },
        };
        for (var _i = 0, _a = Object.entries(contractInterfaces); _i < _a.length; _i++) {
            var _b = _a[_i], interfaceKey = _b[0], obj = _b[1];
            var address = "";
            for (var _c = 0, _d = Object.entries(obj.interface); _c < _d.length; _c++) {
                var _e = _d[_c], key = _e[0], val = _e[1];
                if (key == "web3ContractInstance") {
                    address = val.address;
                }
            }
            chai_1.assert.equal(address, wyvernProtocolConfig["".concat(interfaceKey, "ContractAddress")]);
        }
    });
    (0, mocha_1.test)("OpenSeaApi in OpenSeaPort can receive custom base url", function () {
        chai_1.assert.equal(client.api.apiBaseUrl, apiConfig.apiBaseUrl);
    });
});
//# sourceMappingURL=instantiate.js.map