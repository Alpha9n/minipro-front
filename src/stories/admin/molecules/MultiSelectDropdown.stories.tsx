import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelectDropdown } from './MultiSelectDropdown';

const meta: Meta<typeof MultiSelectDropdown> = {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
};

export default meta;
type Story = StoryObj<typeof MultiSelectDropdown>;

const options = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Go',
  'Java',
  'C#',
  'Ruby',
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
      <div style={{ padding: 20, maxWidth: 400 }}>
        <MultiSelectDropdown
          label="使用言語"
          options={options}
          selected={selected}
          onChange={setSelected}
        />
        <div style={{ marginTop: 10 }}>
          <strong>選択中：</strong> {selected.join(', ')}
        </div>
      </div>
    );
  },
};
