import { Card } from "@/components/ui/card";
import { ScrollText } from "lucide-react";

export default function ProposalsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Futarchy Proposals
        </h1>
        <p className="mt-1 text-sm text-text-muted">
          Governance proposals resolved by prediction market outcomes
        </p>
      </div>

      <Card>
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <ScrollText className="h-10 w-10 text-text-subtle" />
          <p className="text-sm text-text-muted">
            No proposals available. FutarchyGovernor pending deployment.
          </p>
        </div>
      </Card>
    </div>
  );
}
