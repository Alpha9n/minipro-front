import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta = {
  title: 'atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: 'label',
    placeholder: 'text',
    type: 'text',
    required: true,
    advice: '*注意はここに記述します。',
    value: '',
    onChange: () => {
      console.log('submitted');
    },
  },
};

export const email: Story = {
  args: {
    label: 'label',
    placeholder: 'email',
    type: 'email',
    required: true,
    advice: '*注意はここに記述します。',
    value: '',
    onChange: () => {
      console.log('submitted');
    },
  },
};

export const password: Story = {
  args: {
    label: 'label',
    placeholder: 'password',
    type: 'password',
    required: true,
    advice: '*注意はここに記述します。',
    value: '',
    onChange: () => {
      console.log('submitted');
    },
  },
};
