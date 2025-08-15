import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Footer from "./footer";

const meta = {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
