require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: "https://mumbai.infura.io/v3/f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
    //   accounts: [process.env.pk],
    // },
    // polygon: {
    //   url: "https://polygon.infura.io/v3/f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
    //   accounts: [process.env.pk],
    // },
  },
};
