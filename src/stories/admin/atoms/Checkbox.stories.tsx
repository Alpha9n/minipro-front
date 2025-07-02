import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { useArgs } from 'storybook/internal/preview-api';

const meta = {
  title: 'admin/atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default = () => {
  const [args, updateArgs] = useArgs();
  return (
    <Checkbox
      id="example"
      label=""
      checked={args.checked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        updateArgs({ checked: e.target.checked })
      }
    />
  );
};
Default.args = {
  checked: false,
};
