import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Heading from "./heading";

const meta = {
  title: "Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { title: "総説" } };
