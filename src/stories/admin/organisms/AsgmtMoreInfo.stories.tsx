import type { Meta, StoryObj } from '@storybook/react-vite';
import { AsgmtMoreInfo } from './AsgmtMoreInfo';

const meta = {
  title: 'admin/AsgmtMoreInfo',
  component: AsgmtMoreInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AsgmtMoreInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
