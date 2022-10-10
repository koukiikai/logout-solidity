const { expect } = require('chai');

const { ethers, upgrades } = require('hardhat');

describe('BoostNFT', function () {
  it('deploys', async function () {
    const BoostNFT = await ethers.getContractFactory('BoostNFT');
    const BoostNFTProxy = await upgrades.deployProxy(BoostNFT, {
      kind: 'uups',
    });

    const tx = await BoostNFTProxy.safeMint(
      '0x46040DAa36e28Aa9B4bC89F5b69934E16D2621ad',
      1,
      { value: BigInt(0.025 * 10 ** 18) }
    );
    await tx.wait();

    console.log('safeMint:', tx);
    console.log('Token address:', BoostNFTProxy.address);
  });
});
