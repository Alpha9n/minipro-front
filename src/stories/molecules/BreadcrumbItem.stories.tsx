import type { Meta, StoryObj } from '@storybook/react-vite';

import { BreadcrumbItem } from './BreadcrumbItem';

const meta = {
  title: 'molecules/BreadcrumbItem',
  component: BreadcrumbItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BreadcrumbItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    isCurrent: false,
    children: 'トップ',
  },
};

export const Current: Story = {
  args: {
    href: '',
    isCurrent: true,
    children: '現在のページ',
  },
};
