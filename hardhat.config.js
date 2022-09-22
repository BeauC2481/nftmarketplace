require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/j5vmdiKwqw0YSKTXnJfezDv2H57YIuH-',
      accounts: ['0xb12b2eba25490d6566b12bbf626d68845c297a9bc1216a7d753dc2e9528ab464'],
    },
  },
};



