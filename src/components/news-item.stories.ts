import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import NewsItem from "./news-item";

const meta = {
  title: "News Item",
  component: NewsItem,
  tags: ["autodocs"],
} satisfies Meta<typeof NewsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Somewhere: Story = {
  args: {
    when: "2025/04/01",
    what: "私達の糖と免疫に関する研究テーマが、将来世界的な存在感を示す学術的新領域へと発展することが期待できるとして「Kyoto University SPIRIT2 Award 2025」を受賞しました！",
    where: "https://www.research.kyoto-u.ac.jp/spirit2/",
  },
};

export const Here: Story = {
  args: {
    when: "2025/04/01",
    what: "メンバー紹介を更新しました！",
    where: "/members",
  },
};

export const Nowhere: Story = {
  args: {
    when: "2011/06/01",
    what: "活動記録をを更新しました！",
  },
};
