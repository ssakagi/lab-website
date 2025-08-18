import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PublicationItem from "./publication-item";

const meta = {
  title: "Publication Item",
  component: PublicationItem,
  tags: ["autodocs"],
} satisfies Meta<typeof PublicationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {
  args: {
    authors: [
      "Tanaka, S.†",
      "Kawakita, M.†",
      "Yasui, H.",
      "Sudo, K.",
      "Itoh, F.",
      "Sasaki, M.",
      "Shibata, N.",
      "Hara, H.",
      "Iwakura, Y.",
      "Hashidate-Yoshida, T.",
      "Shindou, H.",
      "Shimizu, T.",
      "Oyama, T.",
      "Matsunaga, H.",
      "Takahara, K.",
    ],
    title:
      "An immune-adrenergic pathway induces lethal levels of platelet-activating factor in mice.",
    journal: { name: "Commun. Biol." },
    doi: "10.1038/s42003-024-06498-7",
    year: 2024,
    additional: "(†equal contribution)",
  },
};

export const Review: Story = {
  args: {
    authors: ["足立 匠", "高原 和彦", "稲葉 カヨ"],
    title: "微細粒子物質による炎症惹起",
    journal: {
      name: "臨床免疫・アレルギー科",
      volume: 60,
      pag: "589-595",
    },
    year: 2013,
  },
};
