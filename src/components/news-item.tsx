import Link from "next/link";

export default function NewsItem({
  when,
  what,
  where,
}: {
  when: string;
  what: string;
  where?: string;
}) {
  return (
    <Wrapper where={where}>
      <div className="flex gap-[40px] py-[20px] border-b-[1px] border-separator-primary">
        <div className="w-[128px] text-when-label-primary when-label-md">
          {when}
        </div>
        <div className="font-sans font-[350] text-[20px] leading-[28px]">
          {what}
        </div>
      </div>
    </Wrapper>
  );
}

function Wrapper({
  where,
  children,
}: {
  where?: string;
  children: React.JSX.Element;
}) {
  return where ? (
    where.startsWith("http") ? (
      <a href={where} target="_blank">
        {children}
      </a>
    ) : (
      <Link href={where}>{children}</Link>
    )
  ) : (
    children
  );
}
