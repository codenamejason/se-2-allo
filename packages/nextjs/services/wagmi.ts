"use client";

import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import dotenv from "dotenv";
import { configureChains, createConfig } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

dotenv.config();

// const stagingChains = [
// celoAlfajores,
// arbitrumSepolia,
// sepolia,
// polygonMumbai,
// arbitrumGoerli,
// ];

// onst productionChains = [arbitrum, base, celo, mainnet, polygon, optimism];

// const availableChains = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? stagingChains : productionChains;

const { chains, publicClient } = configureChains(
  [arbitrumSepolia],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: `https://arbitrum-sepolia.blockpi.network/v1/rpc/public`,
      }),
    }),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "Allo Starter Kit",
  projectId: "31b0b6255ee5cc68ae76cab5fa96a9a0",
  chains,
});

export const wagmiConfigData = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const chainData = chains;

export const getChain = (chainId: number) => {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }

  throw new Error(`Chain with id ${chainId} not found`);
};
