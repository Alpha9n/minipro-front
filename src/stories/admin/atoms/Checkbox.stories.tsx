import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'admin/atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    label: 'テキストが必要な場合はここに入ります',
    checked: false,
    onChange: (e) => console.log(`Checkbox changed: ${e.target.checked}`),
  },
};

export const Checked: Story = {
  args: {
    id: '2',
    label: 'チェック済みのチェックボックス',
    checked: true,
    onChange: (e) => console.log(`Checkbox changed: ${e.target.checked}`),
  },
};
