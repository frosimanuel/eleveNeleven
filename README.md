<div style="text-align: center;">
  <img src="packages/nextjs/public/logo.png" alt="Alt text" style="max-width: 100%; height: auto;">
</div>

<!-- <h4 align="center">
  <a href="Link to slides">Slides</a> |
  <a href="Link to demo">Demo</a>
</h4> -->

# About

<h4 align="center">Project started on <a href="https://www.aleph.crecimiento.build/es-aleph-hackathon" alt="Aleph Hackathon Website">Aleph Hackathon</a> !</h4>

🧪 This NFT Marketplace dApp is designed to facilitate art tokenization for artists, big and small.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript,

🔗 To be deployed on Polygon and Avalanche

## Deployed artifacts

### Frontend

[https://technai-marketplace.vercel.app/](https://technai-marketplace.vercel.app/)

### Contracts on Polygon Amoy

- Mock USDC: [https://amoy.polygonscan.com/address/0x80292e202a59957ae482b8c1821d51a234f5b0b6](https://amoy.polygonscan.com/address/0x80292e202a59957ae482b8c1821d51a234f5b0b6)
- Mock NFT: [https://amoy.polygonscan.com/address/0x312504ef3562d2b06b52f8b657fe60171ff94410](https://amoy.polygonscan.com/address/0x312504ef3562d2b06b52f8b657fe60171ff94410)
- Marketplace: [https://amoy.polygonscan.com/address/0xe2b5359ef857dcd2cf3274962895967cb447888e](https://amoy.polygonscan.com/address/0xe2b5359ef857dcd2cf3274962895967cb447888e)

## Quickstart

To get started follow the steps below:

1. Open a terminal and run this commands to clone this repo and install dependencies:

```
git clone https://github.com/luloxi/technai-marketplace.git
cd technai-marketplace
yarn install
```

2. After everything is installed, run this command to start a local blockchain network:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. Open a second terminal, navigate to `eleveNeleven` and run this command to deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. Open a third terminal, and run this command to start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page.

# Features

🎨 **Simple Mint**: Simple Mint is the way for artist to upload their art without needing to pay for minting or transactions, enabling collectors to pay for the first mint of a collection. By leveraging Simple Mint we aim to make artists access tokenizing their art without friction.

The first minter of a collection, who pays for cost of the deployment of the NFT contract, gets a share of the royalties of all the NFTs minted in that collection. This creates a market for art investors being eager to first mint a piece of art they like.

The cost of the deployment consists in the gas cost of the deployment transaction, and a custom optional USDC commision set by the artist that gets distributed 90% for the artist and 10% for the marketplace,

✅ **Royalties**: When buying and selling art through our market, artists have an option to set a royalty amount between 0.01% and 50%. This royalty is paid to the artist every time the NFT is sold, creating a passive income stream for artists.

In the case of Simple Mint, the first minter of a collection gets a share of the royalties of all the NFTs minted in that collection.

🌐 **Cross-Chain NFTs**: As liquidity fluctuates between blockchains and marketplaces, we want to allow artists and collectors to easily bridge their NFTs between blockchains, and thus access other marketplaces. We aim to offer this functionality for NFTs minted on our marketplace by leveraging the Chainlink CCIP (Cross-Chain Interoperability Protocol) token transfer function, or the Avalanche Teleporter.

🎶 **Music NFTs**: We add music to NFTs metadata and integrate with frontend, so that artists can tokenize their music and collectors can enjoy it.

🔄 **Remixing Feature**: We aim to add remixing feature for NFTs, where the creator receives 30% of the royalties of the remix.

🤝 **Social Features**: We aim to add social features to our marketplace, like creating profiles, notifications, messaging, following artists, liking NFTs, and commenting on NFTs.

# Roadmap

## Core development

- Add music to NFTs metadata and integrate with frontend (Reference: [OpenSea metadata-standards](https://docs.opensea.io/docs/metadata-standards))

## Frontend

- Create a page for minting that takes inputs for the metadata of the NFT (Reference: [scaffold-class](https://github.com/luloxi/scaffold-class))
- Create a page for interacting with the marketplace buy function and/or auction function (Reference: [Simple Marketplace w/ Royalties)](https://app.buidlguidl.com/build/UxFNxy5XIMzz9mHKUxy5))
- Implement uploading the NFT Metadata to Filecoin instead of IPFS, and use it with a EIP-712 signature for PolyMint. (Reference: [Viem recoverTypedDataAddress](https://viem.sh/docs/utilities/recoverTypedDataAddress))

## Smart contracts

- Add payment in native gas token and maybe add a mixed pay that allows paying in USDC or native gas token (integrate Chainlink Price Feeds with AggregatorV3Interface) (Reference: [Easy2Pay](https://github.com/luloxi/Easy2Pay))
- Implement EIP-712 signature for PolyMint (Reference: [eip712hashing.sol](https://github.com/Cyfrin/security-and-auditing-full-course-s23/blob/main/eip712hashing.sol))
- Add royalties to NFT and Marketplace (creator, contract owner, 1st minter -optional-) (Reference: [Simple Marketplace w/ Royalties](https://app.buidlguidl.com/build/UxFNxy5XIMzz9mHKUxy5))
- Determine which Royalty standard to implement to NFTs (References: [ERC-2981](https://eips.ethereum.org/EIPS/eip-2981) | [ERC-4910](https://eips.ethereum.org/EIPS/eip-4910))
- Add a functionality to move NFTs between Polygon and Avalanche with Chainlink CCIP (Reference: [Chainlink CCIP Cross-chain Tokens](https://docs.chain.link/ccip/tutorials/cross-chain-tokens))

## Future development

### Frontend

- Introduce web2 social features like creating profiles, following artists, liking NFTs, and commenting on NFTs
- Notification system for increasing engagement (customizable and ideally with email or mobile notifications)
- Feature for creating collections of NFTs and displaying them in a gallery
- Ability to make your own group/community
- Ability to create a profile with a linked wallet (could be with account abstraction to make paymaster feature of PolyMint easier)
- Profile creation with web2.5 login (Twitter, Instagram, Google, etc)
- Messaging system for artists and collectors

### Smart contracts

- Add remixing feature for NFTs, where the creator receives 30% of the royalties of the remix
- Add support for ERC1155 to the marketplace
- Add a functionality to periodically airdrop dividends in USDC for creators (and first minters if appliable)

Reference for expanding marketplace functionalities: [Artion Contracts](https://github.com/Fantom-foundation/Artion-Contracts)
