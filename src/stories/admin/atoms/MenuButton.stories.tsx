import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuButton } from './MenuButton';

const meta = {
  title: 'admin/atoms/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Delete',
    onClick: () => console.log('Menu button clicked'),
  },
};
