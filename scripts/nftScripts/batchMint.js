const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const CrocsNFTFactory = await hre.ethers.getContractFactory(
    "CrocsNFT"
  );
  const crocsNFT = await CrocsNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await crocsNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await crocsNFT.balanceOf(process.env.WALLET_ADDRESS)) +
      " CrocsNFT NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await crocsNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});