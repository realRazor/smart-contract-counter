const {expect} = require("chai");
const hre = require("hardhat");
describe('Counting', () => {
    console.log("test starting");
    let counter;
    let initNum;
    beforeEach(async () => {
        const Counter = await hre.ethers.getContractFactory("Counter");
        counter = await Counter.deploy(initNum);
        await counter.deployed();
    })

    it('should set correct number',async () => {
        expect(await counter.number()).to.equal(initNum);
    });

    it('should increment number',async () => {
        await counter.increment();
        expect(await counter.number()).to.equal(5);
    });
    it('should revert',async () => {
        await counter.increment();
        expect(await counter.increment()).to.be.reverted;
    });
    

});
