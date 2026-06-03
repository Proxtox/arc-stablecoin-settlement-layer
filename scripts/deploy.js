const hre = require("hardhat");

async function main() {
  const SettlementLayer = await hre.ethers.getContractFactory("SettlementLayer");
  const layer = await SettlementLayer.deploy();
  await layer.deployed();
  console.log("SettlementLayer deployed to:", layer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});