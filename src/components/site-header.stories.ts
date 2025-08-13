import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import SiteHeader from "./site-header";

const meta = {
  title: "Site Header",
  component: SiteHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
