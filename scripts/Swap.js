const { ethers } = require("ethers");
require('dotenv').config();

const INFURA_URL_TESTNET = process.env.REACT_APP_INFURA_URL_TESTNET;


await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner()

async function getBalance(address) {
    const balanceBigInt = await provider.getBalance();
    return ethers.utils.formatEther(balanceBigInt);
}

async function main() {
    
    const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET);
    
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });