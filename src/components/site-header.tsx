import Nav from "./nav";

export default function SiteHeader() {
  return (
    <div className="px-[80px] pt-[60px] pb-[24px] bg-surface-primary">
      <Logo />
      <Nav />
    </div>
  );
}

function Logo() {
  return (
    <>
      <div className="font-serif font-semibold text-[24px]">
        京都大学生命科学研究科高次生命科学専攻
      </div>
      <div className="font-serif font-semibold text-[40px]">生体応答学分野</div>
    </>
  );
}
