require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: 'https://rpc-amoy.polygon.technology',
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/WbiKNMhB__9_VwiO1Y8_nH4V-UXYx7ix',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
