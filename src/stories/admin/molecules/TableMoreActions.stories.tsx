import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableMoreActions } from './TableMoreActions';

const meta = {
  title: 'admin/molecules/TableMoreActions',
  component: TableMoreActions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableMoreActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onEdit: () => console.log('Edit action triggered'),
    onDelete: () => console.log('Delete action triggered'),
    onDetail: () => console.log('Detail action triggered'),
  },
};
