import { defineChain } from "viem";

export const mordor = defineChain({
  id: 63,
  name: "Mordor Testnet",
  nativeCurrency: { name: "Mordor ETC", symbol: "METC", decimals: 18 },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://etc-mordor.blockscout.com",
    },
  },
  testnet: true,
});
