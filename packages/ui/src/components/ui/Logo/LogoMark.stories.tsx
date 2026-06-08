import type { Meta, StoryObj } from '@storybook/react';

import LogoMarkComponent, {
  type LogoMarkProps,
} from '@/components/ui/Logo/LogoMark';

const meta = {
  component: LogoMarkComponent,
  tags: ['autodocs'],
} satisfies Meta<LogoMarkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoMark: Story = {
  args: {
    title: 'Nightstem',
  },
};

export const Decorative: Story = {
  args: {
    decorative: true,
  },
};
