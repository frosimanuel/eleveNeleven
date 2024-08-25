import { Chain } from "viem";
import * as chains from "viem/chains";

export type ScaffoldConfig = {
  targetNetworks: readonly Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

// Define the Avalanche L1 chain object
// const avalancheL1: Chain = {
//   id: 43114, // Avalanche C-Chain ID
//   name: "eleven1",
//   nativeCurrency: {
//     name: "Test",
//     symbol: "TEST",
//     decimals: 18,
//   },
//   rpcUrls: {
//     default: {
//       http: ["https://automatic-giggle-qvw45qw77qjc4qp5-9650.app.github.dev/ext/bc/eleven1/rpc"],
//     },
//     public: {
//       http: ["https://automatic-giggle-qvw45qw77qjc4qp5-9650.app.github.dev/ext/bc/eleven1/rpc"],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: "SnowTrace",
//       url: "https://snowtrace.io",
//     },
//   },
//   testnet: false,
// };

const scaffoldConfig = {
  // The networks on which your DApp is live
  // targetNetworks: [chains.hardhat, chains.polygonAmoy, avalancheL1],
  targetNetworks: [chains.hardhat],

  // The interval at which your front-end polls the RPC servers for new data
  pollingInterval: 30000,

  // This is ours Alchemy's default API key.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  // This is ours WalletConnect's default project ID.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Only show the Burner Wallet when running on hardhat network
  onlyLocalBurnerWallet: true,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
