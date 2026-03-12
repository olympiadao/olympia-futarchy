# Copilot Instructions — Olympia Futarchy

## Project

Prediction market governance frontend for Ethereum Classic. Built with Next.js 16 (App Router), React 19, TypeScript 5 (strict), Tailwind CSS 4, wagmi 2.

## Key Rules

1. **TypeScript strict** — no `any`, no `@ts-ignore`, `noUncheckedIndexedAccess: true`
2. **Tailwind 4** — use `@theme inline` tokens: `bg-bg-primary`, `text-brand-green`, `border-border-default`
3. **wagmi 2 + viem** — all contract reads/writes via wagmi hooks. No ethers.js.
4. **Fonts** — Inter for UI, JetBrains Mono for addresses/hashes
5. **Node 24 + pnpm 10** — do not use npm/yarn or Node < 24
6. **Dark-first** — all UI is dark theme using Olympia brand tokens

## Validation

```bash
pnpm lint && pnpm typecheck && pnpm build
```

## Chain

Mordor Testnet (Chain ID 63). Chain definition in `src/lib/utils/mordor.ts`.
