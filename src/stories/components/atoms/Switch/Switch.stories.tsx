// ファイル: src/components/atoms/Switch/Switch.stories.tsx

import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import Switch from './Switch';
import type { SwitchProps } from './Switch';

const meta: Meta<SwitchProps> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Toggle デザインの Switch (Atom) です。',
      },
    },
  },
  argTypes: {
    // onChange のアクションログ出力を使いたい場合は以下を有効化
    // onChange: { action: 'changed' },
  },
};
export default meta;

/**
 * Storybook 用のテンプレートコンポーネント
 * args.checked を初期値にして動的に切り替えます
 */
const Template: StoryFn<SwitchProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(v) => {
        setChecked(v);
        // args.onChange?.(v);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};
