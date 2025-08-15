export default function Heading({ title }: { title: string }) {
  return (
    <h3 className="px-[40px] py-[2px] border-label-primary border-l-[4px] text-label-primary heading-md">
      {title}
    </h3>
  );
}
