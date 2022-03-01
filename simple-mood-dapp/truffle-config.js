const fs = require('fs');
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();
const ropstenApiEndpoint = fs.readFileSync(".ropsten-api").toString().trim();
const rinkebyApiEndpoint = fs.readFileSync(".rinkedby-api").toString().trim();
var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: 1337,
    },
    ropsten: {
      provider: function() { 
      return new HDWalletProvider(mnemonic, ropstenApiEndpoint);
      },
      network_id: 3,
      gasPrice: 7000000000000, 
      networkCheckTimeout: 10000,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, rinkebyApiEndpoint);
      },
      network_id: 4,
      gasPrice: 1000000000000, 
      skipDryRun: true
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.11",
    }
  }
};
