// Placeholder addresses — populated when olympia-contracts-futarchy is deployed
// Reference prototype addresses (from prediction-dao-research):
//   friendGroupMarketFactory: 0xE1eC8d34b36f55015ed636337121CA8EFbA96227
//   tieredRoleManager: 0x55e6346Be542B13462De504FCC379a2477D227f0

export const contracts = {
  63: {
    futarchyGovernor: "0x0000000000000000000000000000000000000000" as const,
    conditionalMarketFactory: "0x0000000000000000000000000000000000000000" as const,
    oracleResolver: "0x0000000000000000000000000000000000000000" as const,
    predictionMarketExchange: "0x0000000000000000000000000000000000000000" as const,
  },
} as const;

export type SupportedChainId = keyof typeof contracts;

export function getContracts(chainId: number) {
  const c = contracts[chainId as SupportedChainId];
  if (!c) throw new Error(`Unsupported chain: ${chainId}`);
  return c;
}
