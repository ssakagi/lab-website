import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Profile from "./profile";

const meta = {
  title: "Profile",
  component: Profile,
  tags: ["autodocs"],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bio: [
      { id: 0, when: 1984, what: "広島大学工学部　卒業" },
      { id: 1, when: 1986, what: "同大学大学院工学研究科　修士課程終了" },
      { id: 2, when: 1986, what: "宝酒造株式会社入社" },
    ],
    award: [
      {
        id: 3,
        when: 2004,
        what: "日本免疫学会発行紙International Immunology誌 Outstanding Merit Award受賞",
      },
      {
        id: 4,
        when: 2006,
        what: "日本免疫学会発行紙International Immunology誌 Outstanding Merit Award受賞",
      },
    ],
  },
};
