import type { Meta, StoryObj } from '@storybook/react';
import { GenerateAsgmt } from './GenerateAsgmt';

const meta = {
  title: 'admin/organisms/GenerateAsgmt',
  component: GenerateAsgmt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GenerateAsgmt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    result: 'aaaaaaaaa',
    onSave: () => console.log('Menu clicked'),
    onRegenerate: () => console.log('Menu clicked'),
  },
};
