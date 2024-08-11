import "@nomiclabs/hardhat-waffle";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", () => {
  it("should say hi", async () => {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("Hello World!");
  });
});
