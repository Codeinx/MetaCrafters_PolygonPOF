const hre = require("hardhat");

async function main() {
  const CrocsNFTFactory = await hre.ethers.getContractFactory("CrocsNFT");

  const CrocsNFT = await CrocsNFTFactory.deploy();

  console.log("CrocsNFT deployed to: ", CrocsNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});