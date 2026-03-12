import { Card } from "@/components/ui/card";

export default async function MarketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Market #{id}</h1>
        <p className="mt-1 text-sm text-text-muted">
          Market detail and trading interface
        </p>
      </div>

      <Card>
        <p className="text-center text-sm text-text-muted">
          Market data will load once contracts are deployed to Mordor.
        </p>
      </Card>
    </div>
  );
}
