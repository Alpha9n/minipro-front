import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GreenButton: Story = {
  args: {
    label: '長い文章の入ったボタン',
    color: 'green',
    variant: 'solid',
  },
};

export const RedButton: Story = {
  args: {
    label: '長い文章の入ったボタン',
    color: 'red',
    variant: 'solid',
  },
};

export const OrangeButton: Story = {
  args: {
    label: '長い文章の入ったボタン',
    color: 'orange',
    variant: 'solid',
  },
};

export const BlueOutlineButton: Story = {
  args: {
    label: '長い文章の入ったボタン',
    color: 'blue',
    variant: 'solid',
  },
};

export const GrayButton: Story = {
  args: {
    label: '長い文章の入ったボタン',
    color: 'gray',
    variant: 'solid',
  },
};

export const LightButton: Story = {
  args: {
    label: '長い文章の入ったボタン',
    color: 'light',
    variant: 'solid',
  },
};

export const IconOnlyButton: Story = {
  args: {
    label: '✕',
    color: 'green',
    size: 'small',
    variant: 'solid',
  },
};

export const PreviewCircleButton: Story = {
  args: {
    label: 'プレビュー',
    color: 'blue_',
    shape: 'circle',
    variant: 'solid',
  },
};
