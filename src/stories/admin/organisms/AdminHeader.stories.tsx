import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdminHeader } from './AdminHeader';

const meta = {
  title: 'admin/organisms/AdminHeader',
  component: AdminHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AdminHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onMenuClick: () => console.log('Menu clicked'),
  },
};
