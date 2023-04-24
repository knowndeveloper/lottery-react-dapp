require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@appliedblockchain/chainlink-plugins-fund-link");

require("./tasks/getLotteryData");
require("./tasks/createLottery");
require("./tasks/declareWinner");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  paths: {
    artifacts: './src/artifacts',
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
      4: 0,
    },
    user2: {
      default: 1,
      4: 1,
    },
    user3: {
      default: 2,
      4: 2,
    },
  },
};