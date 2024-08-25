<h1 align="center"> 🤫 TECHNAI 🤫</h1>
  <h4 align="center">Built for Aleph Hackathon !</h4>

<!-- <h4 align="center">
  <a href="Link to slides">Slides</a> |
  <a href="Link to demo">Demo</a>
</h4> -->

# About

🧪 This NFT Marketplace dApp is designed to facilitate art tokenization for artists, big and small.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript,

🔗 To be deployed on Polygon and Avalanche

## Quickstart

To get started follow the steps below:

1. Open a terminal and run this commands to clone this repo and install dependencies:

```
git clone https://github.com/frosimanuel/eleveNeleven.git
cd eleveNeleven
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

🎨 **PolyMint**: PolyMint is the way for artist to upload their art without needing to pay for minting or transactions, enabling collectors to pay for the first mint of a collection. By leveraging PolyMint we aim to make artists access tokenizing their art without friction.

The first minter of a collection, who pays for cost of the deployment of the NFT contract, gets a share of the royalties of all the NFTs minted in that collection. This creates a market for art investors being eager to first mint a piece of art they like.

The cost of the deployment consists in the gas cost of the deployment transaction, and a custom optional USDC commision set by the artist that gets distributed 90% for the artist and 10% for the marketplace,

✅ **Royalties**: When buying and selling art through our market, artists have an option to set a royalty amount between 0.01% and 50%. This royalty is paid to the artist every time the NFT is sold, creating a passive income stream for artists.

In the case of PolyMint, the first minter of a collection gets a share of the royalties of all the NFTs minted in that collection.

💸 **USDC Payments**: We use USDC as the main currency for buying and selling art. This helps artists and collectors avoid volatility in the crypto market, and allows them to easily convert their earnings to fiat currency.

🧱 **Native payments**: By leveraging Chainlink Price Feeds, we aim to also offer the possibility of paying with the native gas token of the blockchain the NFTs is being minted on (i.e.: MATIC or ETH).

🗄️ **Secure and Transparent**: NFT collections metadata is uploaded to Filecoin to guarantee security and trusted decentralized storage of art metadata.

🌐 **Cross-Chain NFTs**: As liquidity fluctuates between blockchains and marketplaces, we want to allow artists and collectors to easily bridge their NFTs between blockchains, and thus access other marketplaces. We aim to offer this functionality for NFTs minted on our marketplace by leveraging the Chainlink CCIP (Cross-Chain Interoperability Protocol) token transfer function.

# Roadmap

## Core development

- Add music to NFTs metadata and integrate with frontend (Reference: [https://docs.opensea.io/docs/metadata-standards](https://docs.opensea.io/docs/metadata-standards))

## Frontend

- Create a page for minting that takes inputs for the metadata of the NFT (Reference: [https://github.com/luloxi/scaffold-class](https://github.com/luloxi/scaffold-class))
- Create a page for interacting with the marketplace buy function and/or auction function (Reference: [Create a page that interacts with the Marketplace contract (Reference: https://app.buidlguidl.com/build/UxFNxy5XIMzz9mHKUxy5)](https://app.buidlguidl.com/build/UxFNxy5XIMzz9mHKUxy5))
- Implement uploading the NFT Metadata to Filecoin instead of IPFS, and use it with a EIP-712 signature for PolyMint. (Reference: [https://viem.sh/docs/utilities/recoverTypedDataAddress](https://viem.sh/docs/utilities/recoverTypedDataAddress))

## Smart contracts

- Add USDC as payment method (and maybe stable payment in native gas token with Chainlink Price Feeds) (Reference: [https://github.com/luloxi/Easy2Pay](https://github.com/luloxi/Easy2Pay))
- Add royalties to NFT and Marketplace (creator, contract owner, 1st minter -optional-) (Reference: [https://app.buidlguidl.com/build/UxFNxy5XIMzz9mHKUxy5](https://app.buidlguidl.com/build/UxFNxy5XIMzz9mHKUxy5))
- Add a functionality to move NFTs between Polygon and Avalanche with Chainlink CCIP (Reference: [https://docs.chain.link/ccip/tutorials/cross-chain-tokens](https://docs.chain.link/ccip/tutorials/cross-chain-tokens))

Reference for expanding marketplace functionalities: [https://github.com/Fantom-foundation/Artion-Contracts](https://github.com/Fantom-foundation/Artion-Contracts)
