"use client";

import NewsItem from "@/components/news-item";

import * as news from "../../public/news.json";

import { useState } from "react";

const defaultListSize = 5;

export default function NewsArea() {
  const [isOpen, setIsOpen] = useState(false);
  const currentNewsList = isOpen
    ? news.all
    : news.all.slice(0, defaultListSize);
  return (
    <section className="flex flex-col gap-[40px] py-[160px]">
      {
        // flex直下だとinline-blockが効かないからとりあえずdivタグでラップ
      }
      <div>
        <h3 className="inline-block px-[20px] py-[5px] bg-surface-contrast text-label-contrast heading-lg">
          {"What's new"}
        </h3>
      </div>
      <ol>
        {currentNewsList.map((v) => (
          <li key={v.which}>
            <NewsItem when={v.when} what={v.what} where={v.where} />
          </li>
        ))}
      </ol>
      {isOpen || (
        <div className="flex justify-center">
          <button onClick={() => setIsOpen(true)}>
            <SouthArrow />
          </button>
        </div>
      )}
    </section>
  );
}

function SouthArrow() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.5 16C31.5 7.43959 24.5604 0.5 16 0.5C7.43959 0.5 0.5 7.43959 0.5 16C0.5 24.5604 7.43959 31.5 16 31.5C24.5604 31.5 31.5 24.5604 31.5 16Z"
        stroke="#555555"
      />
      <path
        d="M11.5012 14.2574L15.7438 18.5001L19.9864 14.2574"
        stroke="#555555"
        strokeWidth="2"
      />
    </svg>
  );
}
