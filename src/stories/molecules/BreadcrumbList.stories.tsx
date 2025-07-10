import type { Meta, StoryObj } from '@storybook/react-vite';

import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbItem } from './BreadcrumbItem';

const meta = {
  title: 'molecules/BreadcrumbList',
  component: BreadcrumbList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Breadcrumb: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem isCurrent={false} href="#top" children="トップ" />
        <BreadcrumbItem isCurrent={true} href="#www" children="現在のページ" />
      </>
    ),
  },
};
