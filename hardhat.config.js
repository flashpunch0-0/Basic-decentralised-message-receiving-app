require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "alchemy api url",
      accounts: ["metamask private key "]
    },
  },
};