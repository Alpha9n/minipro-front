import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableHeader } from './TableHeader';

const meta = {
  title: 'admin/Molecules/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: ['', 'テーマ', '技術スタック', '概要', 'Actions'],
  },
};
