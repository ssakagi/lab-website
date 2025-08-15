export default function Breadcrumb({ pageName }: { pageName: string }) {
  return (
    <div className="flex gap-[20px] px-[80px] py-[40px] text-label-primary body-lg">
      <span>Home</span>
      <span>{">"}</span>
      <span>{pageName}</span>
    </div>
  );
}
