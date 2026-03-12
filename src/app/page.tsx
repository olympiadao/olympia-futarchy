import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ScrollText, Radio, Info } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-text-muted">
          Olympia Futarchy — Prediction Markets for ETC · Demo v0.1
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-brand-green" />
            <div>
              <p className="text-xs text-text-muted">Active Markets</p>
              <p className="text-xl font-bold tracking-tight">—</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <ScrollText className="h-5 w-5 text-brand-amber" />
            <div>
              <p className="text-xs text-text-muted">Proposals</p>
              <p className="text-xl font-bold tracking-tight">—</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <Radio className="h-5 w-5 text-semantic-info" />
            <div>
              <p className="text-xs text-text-muted">Oracle Feeds</p>
              <p className="text-xl font-bold tracking-tight">—</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-4 w-4 text-semantic-info" />
            How Futarchy Works
          </CardTitle>
        </CardHeader>
        <div className="space-y-2 text-sm text-text-secondary">
          <p>
            <strong className="text-text-primary">1.</strong> A governance
            proposal creates two conditional prediction markets — one for
            &ldquo;pass&rdquo; and one for &ldquo;fail&rdquo;
          </p>
          <p>
            <strong className="text-text-primary">2.</strong> Participants trade
            on both markets, pricing in their beliefs about each outcome
          </p>
          <p>
            <strong className="text-text-primary">3.</strong> After the trading
            period, the market with the higher price determines the decision
          </p>
          <p>
            <strong className="text-text-primary">4.</strong> Oracles resolve the
            markets and positions are settled on-chain
          </p>
        </div>
      </Card>

      <div>
        <CardHeader>
          <CardTitle>Recent Markets</CardTitle>
          <Link
            href="/markets"
            className="text-sm text-brand-green hover:text-brand-green-hover"
          >
            View all
          </Link>
        </CardHeader>
        <Card>
          <p className="text-center text-sm text-text-muted">
            No markets yet. Contracts pending deployment.
          </p>
        </Card>
      </div>
    </div>
  );
}
