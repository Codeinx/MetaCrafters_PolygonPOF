const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const CrocsNFT = await hre.ethers.getContractFactory("CrocsNFT");

  const crocsNFT = await CrocsNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await crocsNFT.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});