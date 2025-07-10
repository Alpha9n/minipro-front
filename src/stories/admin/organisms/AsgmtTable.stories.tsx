import type { Meta, StoryObj } from '@storybook/react-vite';
import { AsgmtTable } from './AsgmtTable';

const meta = {
  title: 'admin/AsgmtTable',
  component: AsgmtTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AsgmtTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    assignments: [
      {
        id: 1,
        theme: 'テーマ1',
        technologyStack: '技術スタック1',
        description: '概要1',
      },
      {
        id: 2,
        theme: 'テーマ2',
        technologyStack: '技術スタック2',
        description: '概要2',
      },
      {
        id: 3,
        theme: 'テーマ3',
        technologyStack: '技術スタック3',
        description: '概要3',
      },
    ],
  },
};
