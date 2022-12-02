const hre = require("hardhat");

async function main() {
    const swapRouter= "0xE592427A0AEce92De3Edee1F18E0157C05861564";

    const Swap = await hre.ethers.getContractFactory("SimpleSwap");
    const swap = await Swap.deploy(swapRouter);

    await swap.deployed();

    console.log(
        `Contract deployed to: ${swap.address}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});