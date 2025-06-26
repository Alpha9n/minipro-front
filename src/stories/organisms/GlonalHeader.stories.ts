import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlobalHeader } from "./GlobalHeader";

const meta = {
    title: 'Organisms/GlobalHeader',
    component: GlobalHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        siteTitle: 'みにぷろ',
        topUrl: '#',
    }
} satisfies Meta<typeof GlobalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
}