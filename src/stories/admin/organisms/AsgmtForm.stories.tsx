import type { Meta, StoryObj } from '@storybook/react-vite';
import { AsgmtForm } from './AsgmtForm';

const meta = {
  title: 'admin/AsgmtForm',
  component: AsgmtForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AsgmtForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onGenerate: (data) => {
      console.log('Form submitted:', data);
    },
  },
};
