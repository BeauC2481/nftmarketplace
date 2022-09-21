const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UNfhfGfQ9lrSjTGUS_X-BM-G0_lMEVh9',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};


