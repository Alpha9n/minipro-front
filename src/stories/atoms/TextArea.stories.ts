import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta = {
  title: 'Atoms/Textarea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: '',
    value: '',
  },
};
