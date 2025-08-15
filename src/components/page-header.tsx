export default function PageHeader({ pageName }: { pageName: string }) {
  return (
    <h2 className="text-center py-[40px] bg-surface-secondary heading-xl text-label-primary">
      {pageName}
    </h2>
  );
}
