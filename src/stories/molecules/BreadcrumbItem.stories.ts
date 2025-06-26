import type { Meta, StoryObj } from '@storybook/react-vite';

import { BreadcrumbItem } from './BreadcrumbItem';

const meta = {
  title: 'molecules/BreadcrumbItem',
  component: BreadcrumbItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof BreadcrumbItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const items: Story = {
  args: {
    children: 'top',
  },
};
