# Olympia Futarchy — Claude Code Instructions

## Project Context

Prediction market governance application for Ethereum Classic. Implements futarchy — proposals resolved by market outcomes instead of direct voting. Participants trade on conditional markets, and the market price determines the governance decision. Interacts with on-chain contracts (FutarchyGovernor, ConditionalMarketFactory, OracleResolver).

**Repo:** `olympiadao/olympia-futarchy`
**Deploy:** Vercel

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript 5 (strict)
- Tailwind CSS 4 (CSS-first config)
- wagmi 2 + viem (wallet/contract interaction)
- RainbowKit 2 (wallet connection)
- React Query 5 (data fetching)
- Lucide React (icons)
- pnpm 10, Node 24

## Quick Commands

```bash
pnpm dev          # Dev server (Turbopack)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
```

## Brand

- Primary: `#00ffae` (neon green)
- Background: `#0a0f10` (dark)
- Font: Inter (UI) + JetBrains Mono (code/addresses)
- Dark-first design, Olympia palette only

## Key Contracts (Mordor Testnet, Chain 63)

Contracts are pending deployment from `olympia-contracts-futarchy`. Placeholder addresses in `src/lib/contracts/addresses.ts`.

| Contract | Status |
|----------|--------|
| FutarchyGovernor | Pending |
| ConditionalMarketFactory | Pending |
| OracleResolver | Pending |
| PredictionMarketExchange | Pending |

ABIs will be placed in `src/lib/contracts/abis/` once contracts are deployed.

## Related ECIPs

- ECIP-1117: Futarchy Governance (prediction market-based decision making)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root (fonts, providers, sidebar)
│   ├── page.tsx              # Dashboard
│   ├── providers.tsx         # wagmi + RQ + RainbowKit
│   ├── globals.css           # Tailwind 4 theme tokens
│   ├── markets/              # Market list + detail
│   ├── proposals/            # Futarchy proposals
│   └── oracles/              # Oracle status
├── components/
│   ├── layout/               # Header, sidebar, mobile nav
│   └── ui/                   # Card, Badge, Button
└── lib/
    ├── contracts/            # wagmi config, addresses, ABIs
    └── utils/                # cn, mordor chain, formatters
```

## Boundaries

### Always Do
- Run `pnpm lint && pnpm typecheck` before commits
- Use wagmi hooks for contract reads/writes
- Use JetBrains Mono for contract addresses and hashes
- Keep brand tokens consistent with olympia-app

### Ask First
- Adding new dependencies
- Changing wallet connection flow
- Modifying contract ABIs or addresses

### Never Do
- Commit `.env` files or private keys
- Use `any` type without justification
- Skip TypeScript errors with `@ts-ignore`
- Use deprecated versions (Node 22, Next.js 14/15)
- Hardcode chain IDs — use config

## Validation

Before every commit:

```bash
pnpm lint && pnpm typecheck && pnpm build
```

All three must pass.
