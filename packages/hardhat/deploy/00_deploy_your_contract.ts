import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
// import { ethers } from "hardhat";

const FRONTEND_BURNER_WALLET = "0x81254A6430d9A54bAb64CF3b65B624c7CCCBA6b7";

const localChainId = "31337";
const avalancheFujiChainId = "43113";
const polygonAmoyChainId = "80002";

const usdcOnPolygonAmoy = "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582";
const usdcOnAvalancheFuji = "0x5425890298aed601595a70AB815c96711a31Bc65";

/**
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const chainId = await hre.getChainId();

  await deploy("MockERC20", {
    from: deployer,
    // Contract constructor arguments
    // args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  const USDC_ADDRESS =
    chainId === localChainId
      ? (await hre.deployments.get("MockERC20")).address
      : chainId === avalancheFujiChainId
      ? usdcOnAvalancheFuji
      : chainId === polygonAmoyChainId
      ? usdcOnPolygonAmoy
      : "";

  await deploy("MockERC721", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  await deploy("Marketplace", {
    from: deployer,
    args: [USDC_ADDRESS],
    log: true,
    autoMine: true,
  });

  // Mint 1000 MockERC20 tokens to user wallet
  const MockERC20 = await hre.ethers.getContract<Contract>("MockERC20", deployer);
  await MockERC20.mint(FRONTEND_BURNER_WALLET, 1000);

  await deploy("Signature712", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  // set collection royalty for MockERC721 NFT

  // const MockERC721 = await ethers.getContract<Contract>("MockERC721", deployer);
  // const Marketplace = await ethers.getContract<Contract>("Marketplace", deployer);
  // await Marketplace.setNFTCollectionRoyalty(
  //   MockERC721.address,
  //   "MockERC721",
  //   "0x21aDafAA34d250a4fa0f8A4d2E2424ABa0cEE563",
  //   1000,
  // );

  // MAYBE THIS IS A DEPRECATED WAY TO VERIFY CONTRACTS:
  // Verify from the command line by running `yarn verify`

  // You can also Verify your contracts with Etherscan here...
  // You don't want to verify on localhost
  // try {
  //   if (chainId !== localChainId) {
  //     await run("verify:verify", {
  //       address: YourContract.address,
  //       contract: "contracts/YourContract.sol:YourContract",
  //       constructorArguments: [],
  //     });
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];
