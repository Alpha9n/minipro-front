import type { Meta, StoryObj } from '@storybook/react-vite';
import { StepList } from './StepList';
import type { Step } from './StepList';

const meta = {
  title: 'Molecules/StepList',
  component: StepList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StepList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSteps: Step[] = [
  {
    number: 1,
    title: 'データベースの構築をしてみよう',
    description: 'ユーザーの身長・体重・BMI・名前を保存するDBを作る。',
    active: true,
  },
  {
    number: 2,
    title: '関数を作ってみよう',
    description: 'BMIを計算する関数を作成する。',
  },
];

export const Default: Story = {
  args: {
    steps: sampleSteps,
  },
};
