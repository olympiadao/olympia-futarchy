import { Card } from "@/components/ui/card";
import { Radio } from "lucide-react";

export default function OraclesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Oracle Status</h1>
        <p className="mt-1 text-sm text-text-muted">
          Oracle feeds, resolution status, and dispute windows
        </p>
      </div>

      <Card>
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <Radio className="h-10 w-10 text-text-subtle" />
          <p className="text-sm text-text-muted">
            No oracle feeds available. OracleResolver pending deployment.
          </p>
        </div>
      </Card>
    </div>
  );
}
