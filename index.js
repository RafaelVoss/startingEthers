const { ethers } = require("ethers");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
const ETHtoUSD = 3040;

const address = '0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa';

const main = async () => {
  const block = await provider.getBlockNumber();
  const balance = await provider.getBalance(address);
  const balance_Gwei = 
    balance.toString().slice(0, balance.toString().length-9) +
    "." +
    balance.toString().slice(balance.toString().length-9, balance.toString().length);
  console.log(`\nETH Balance of ${address} --> ${(ethers.formatEther(balance)*ETHtoUSD).toFixed(2)} USD`);
  console.log(`\nETH Balance of ${address} --> ${ethers.formatEther(balance)} ETH`);
  console.log(`\nETH Balance of ${address} --> ${balance_Gwei} Gwei`);
  console.log(`\nETH Balance of ${address} --> ${balance} wei`);
  console.log(`\nCurrent Block Number --> ${block}`);
  console.log(`\ntype of USD balance --> ${typeof((ethers.formatEther(balance)*ETHtoUSD).toFixed(2))}`);
  console.log(`\ntype of ETH balance --> ${typeof(ethers.formatEther(balance))}`);
  console.log(`\ntype of wei balance --> ${typeof(balance)}`);
  // console.log(`\ntype of wei balance --> ${typeof(ethers.parseEther("1.0"))}`);
};

main();