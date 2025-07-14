import type { Meta } from '@storybook/react';
import { Switch } from './Switch';
import { useArgs } from 'storybook/internal/preview-api';

const meta = {
  title: 'atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;

export const Default = () => {
  const [args, updateArgs] = useArgs();

  return (
    <Switch
      id="example"
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
