const { expect } = require('chai');
const hre = require('hardhat');

describe('BoostNFT', function () {
  it('deploys', async function () {
    const BoostNFT = await hre.ethers.getContractFactory('BoostNFT');
    const BoostNFTProxy = await hre.upgrades.deployProxy(BoostNFT, {
      kind: 'uups',
    });

    const value = BigInt(0.025 * 10 ** 18 * 2);

    let tx = await BoostNFTProxy.multiSafeMint(
      '0x46040DAa36e28Aa9B4bC89F5b69934E16D2621ad',
      [2, 2],
      {
        value: value + value / 100n,
      }
    );
    console.log(tx);
    expect((await tx.wait()).status).to.equal(1);
  });
});
