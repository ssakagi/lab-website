"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navList = [
  { id: 0, name: "研究概要", path: "/theme" },
  { id: 1, name: "発表論文", path: "/publications" },
  { id: 2, name: "メンバー", path: "/members" },
  { id: 3, name: "院生募集", path: "/application" },
];

export default function Nav() {
  const currentPath = usePathname();
  return (
    <ul className="flex gap-[40px] justify-end">
      {navList.map((item) => {
        // インラインではなく変数としてテンプレート文字列にvariantを埋め込んでも正しいcssが反映されない...仕方ないので完全名で指定する
        const className =
          item.path === currentPath
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
