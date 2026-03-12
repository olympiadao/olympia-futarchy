import { Card } from "@/components/ui/card";

export default async function ProposalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Proposal #{id}</h1>
        <p className="mt-1 text-sm text-text-muted">
          Proposal detail with paired prediction markets
        </p>
      </div>

      <Card>
        <p className="text-center text-sm text-text-muted">
          Proposal data will load once contracts are deployed to Mordor.
        </p>
      </Card>
    </div>
  );
}
