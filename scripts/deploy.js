const { ethers, upgrades } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const BoostNFT = await ethers.getContractFactory('BoostNFT');
  const BoostNFTProxy = await upgrades.deployProxy(BoostNFT, {
    kind: 'uups',
  });

  await BoostNFTProxy.deployed();

  console.log('Proxy address:', BoostNFTProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
