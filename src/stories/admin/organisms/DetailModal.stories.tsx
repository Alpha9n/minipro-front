import type { Meta, StoryObj } from '@storybook/react-vite';
import { DetailModal } from './DetailModal';

const meta = {
  title: 'admin/molecules/DetailModal',
  component: DetailModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DetailModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Asgmt: Story = {
  args: {
    title: '課題詳細情報',
    asgmtInfo: [
      {
        label: 'タイトル',
        col: 'あああ',
      },
    ],
    withAnker: true,
    ankerUrl: 'aaa',
    onClose: () => console.log('Link click'),
  },
};

export const User: Story = {
  args: {
    title: 'ユーザー詳細情報',
    asgmtInfo: [
      {
        label: '名前',
        col: '大久保裕',
      },
    ],
    withAnker: false,
    onClose: () => console.log('Link click'),
  },
};
