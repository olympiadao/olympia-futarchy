import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function MarketsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Markets</h1>
        <p className="mt-1 text-sm text-text-muted">
          Browse active and resolved prediction markets
        </p>
      </div>

      <Card>
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <TrendingUp className="h-10 w-10 text-text-subtle" />
          <p className="text-sm text-text-muted">
            No markets available. Contracts pending deployment to Mordor.
          </p>
        </div>
      </Card>
    </div>
  );
}
