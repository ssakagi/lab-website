import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Breadcrumb from "./breadcrumb";

const meta = {
  title: "Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Theme: Story = {
  args: {
    pageName: "研究概要",
  },
};

export const Publications: Story = {
  args: {
    pageName: "発表論文",
  },
};

export const Members: Story = {
  args: {
    pageName: "メンバー",
  },
};

export const Application: Story = {
  args: {
    pageName: "院生募集",
  },
};
