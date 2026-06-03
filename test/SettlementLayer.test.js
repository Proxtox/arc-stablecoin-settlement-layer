const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SettlementLayer", function () {
  let layer;
  let owner, user1, user2;

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();
    const Layer = await ethers.getContractFactory("SettlementLayer");
    layer = await Layer.deploy();
    await layer.deployed();
  });

  it("Should allow deposits and settlements", async function () {
    await layer.connect(user1).deposit({ value: ethers.utils.parseEther("100") });
    await layer.connect(user1).settle(user2.address, ethers.utils.parseEther("50"));
    expect(await layer.getBalance(user2.address)).to.equal(ethers.utils.parseEther("50"));
  });
});