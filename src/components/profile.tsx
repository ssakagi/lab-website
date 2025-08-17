"use client";

import { useState } from "react";

type ProfileProps = {
  bio: { id: number; when: number; what: string }[];
  award: { id: number; when: number; what: string }[];
};

export default function Profile({ bio, award }: ProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="h-[48px] flex items-center gap-[10px] px-[40px] py-[10px] ml-auto mr-[20px] relative bg-surface-contrast text-label-contrast font-sans font-medium text-[14px] leading-[24px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // 上下反転(NorthArrow)
          <div className="rotate-180">
            <SouthArrow />
          </div>
        ) : (
          <SouthArrow />
        )}
        プロフィール
      </button>
      {isOpen && (
        <div className="mt-[-24px]">
          <ProfileBox bio={bio} award={award} />
        </div>
      )}
    </>
  );
}

function ProfileBox({ bio, award }: ProfileProps) {
  return (
    <div className="flex flex-col gap-[60px] p-[80px] bg-surface-primary border-outline-primary border-[1px]">
      <section>
        <h5>略歴</h5>
        <ol className="pl-[40px]">
          {bio.map((v) => (
            <li key={v.id}>
              <ProfileItem
                when={v.when}
                what={v.what}
                // hasUnderline={i !== bio.length - 1}
              />
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h5>受賞歴</h5>
        <ol className="pl-[40px]">
          {award.map((v) => (
            <li key={v.id}>
              <ProfileItem
                when={v.when}
                what={v.what}
                // hasUnderline={i !== award.length - 1}
              />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

function ProfileItem({
  when,
  what,
}: // hasUnderline = true,
{
  when: number;
  what: string;
  // hasUnderline?: boolean;
}) {
  /*
  const className = hasUnderline
    ? "flex gap-[10px] py-[20px] border-b-[1px] border-separator-secondary"
    : "flex gap-[10px] py-[20px]";
    */
  return (
    <div className="flex gap-[10px] py-[20px] border-b-[1px] border-separator-secondary">
      <span className="text-when-label-primary when-label-sm">{when}</span>
      <span className="font-sans text-[12px] leading-[24px]">{what}</span>
    </div>
  );
}

function SouthArrow() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11Z" />
      <path d="M20.6875 11C20.6875 5.64974 16.3503 1.3125 11 1.3125C5.64974 1.3125 1.3125 5.64974 1.3125 11C1.3125 16.3503 5.64974 20.6875 11 20.6875C16.3503 20.6875 20.6875 16.3503 20.6875 11Z" />
      <path
        d="M8.18835 9.91089L10.84 12.5625L13.4917 9.91089"
        strokeWidth="2"
      />
    </svg>
  );
}
