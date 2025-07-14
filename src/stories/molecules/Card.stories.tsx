import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Locked: Story = {
  args: {
    img: 'https://via.placeholder.com/150',
    title: 'とても長いカードのタイトル',
    content:
      '概要はこのように表示されます。長い文章も入力できます。とても長い文章ではこのような表示のされ方になります',
    advice: '※前提講義を終了してください',
    isLocked: true,
  },
};

export const Unlocked: Story = {
  args: {
    img: 'https://via.placeholder.com/150',
    title: 'とても長いカードのタイトル',
    content:
      '概要はこのように表示されます。長い文章も入力できます。とても長い文章ではこのような表示のされ方になります',
    advice: '※前提講義を終了してください',
    isLocked: false,
  },
};
