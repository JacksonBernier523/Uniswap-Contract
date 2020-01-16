require('dotenv').config();

const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env.MNEMONIC;
const infuraKey = process.env.INFURA_ACCESS_TOKEN;
const gasPrice = 10000000000;
const ropstenUrl = "https://ropsten.infura.io/" + infuraKey;
const mainnetUrl = "https://mainnet.infura.io/" + infuraKey;

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, ropstenUrl),
      network_id: 3,
      gasPrice: gasPrice
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, mainnetUrl),
      network_id: 1,
      gasPrice: gasPrice
    }
  }
};
