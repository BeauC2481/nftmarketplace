const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  solidity: '0.8.4',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UNfhfGfQ9lrSjTGUS_X-BM-G0_lMEVh9',
      accounts: ['b12b2eba25490d6566b12bbf626d68845c297a9bc1216a7d753dc2e9528ab464'],
    },
  },
};


