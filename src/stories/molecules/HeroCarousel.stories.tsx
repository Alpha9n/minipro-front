import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel } from './HeroCarousel';

const meta: Meta<typeof HeroCarousel> = {
  title: 'Organisms/HeroCarousel',
  component: HeroCarousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {
  args: {
    items: [
      {
        imageUrl: 'https://via.placeholder.com/640x360?text=完成イメージ1',
      },
      {
        imageUrl: 'https://via.placeholder.com/640x360?text=完成イメージ2',
      },
      {
        imageUrl: 'https://via.placeholder.com/640x360?text=完成イメージ3',
      },
      // {
      //   imageUrl: 'https://via.placeholder.com/640x360?text=完成イメージ3',
      // },
    ],
  },
};
