import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserTable } from './UserTable';

const meta = {
  title: 'admin/UserTable',
  component: UserTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: [
      { id: 1, name: '山田太郎', email: 'aaaa' },
      { id: 2, name: '佐藤花子', email: 'bbbb' },
      { id: 3, name: '鈴木一郎', email: 'cccc' },
    ],
  },
};
