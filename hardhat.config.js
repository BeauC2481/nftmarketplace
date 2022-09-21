require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/UNfhfGfQ9lrSjTGUS_X-BM-G0_lMEVh9',
      accounts: ['b12b2eba25490d6566b12bbf626d68845c297a9bc1216a7d753dc2e9528ab464'],
    },
  },
};

