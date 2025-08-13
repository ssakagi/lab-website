import Link from "next/link";

export default function SiteHeader({ pageName }: { pageName?: string }) {
  return (
    <div className="px-[80px] pt-[60px] pb-[24px] bg-surface-primary">
      <Logo />
      <Nav pageName={pageName} />
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

const navList = [
  { id: 0, name: "研究概要", path: "/theme" },
  { id: 1, name: "発表論文", path: "/publications" },
  { id: 2, name: "メンバー", path: "/members" },
  { id: 3, name: "院生募集", path: "/application" },
];

// Memo: navListをpageListとして共通化しつつヘッダーやパンくずをクライアントコンポーネントとしてlayout.tsxに含めてもいいが今回はシンプルにページ単位で静的にレンダリングする
function Nav({ pageName }: { pageName?: string }) {
  return (
    <ul className="flex gap-[40px] justify-end">
      {navList.map((item) => {
        // インラインではなく変数としてテンプレート文字列にvariantを埋め込んでも正しいcssが反映されない...仕方ないので完全名で指定する
        const className =
          item.name === pageName
            ? "text-nav-label-primary-active nav-label-active"
            : "text-nav-label-primary-default nav-label-default";
        return (
          <li key={item.id}>
            <Link href={item.path}>
              <span className={className}>{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
