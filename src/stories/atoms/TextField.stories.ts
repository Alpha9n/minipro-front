import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

// Meta定義（satisfiesを使って型安全に）
const meta = {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// ------------------------------------
// 各バリエーション（argsを使って制御）
// ------------------------------------

export const DefaultText: Story = {
  args: {
    label: 'Label',
    required: true,
    value: 'テキストのテスト',
    type: 'text',
    note: '注意はここに記述します。',
  },
};

export const PasswordField: Story = {
  args: {
    label: 'Label',
    required: true,
    value: '・・・・・・・',
    type: 'password',
    note: '注意はここに記述します。',
  },
};
