import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// 状態付き Story
export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.selected || '');

    return (
      <Dropdown
        {...args}
        selected={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          args.onChange?.(value);
        }}
      />
    );
  },
  args: {
    label: 'Label',
    options: [
      { value: 'apple', label: 'りんご' },
      { value: 'banana', label: 'バナナ' },
      { value: 'orange', label: 'オレンジ' },
    ],
    selected: 'banana',
    warningExists: true,
    warningText: '注意事項はここに記述する',
  },
};
