import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'], // 自動ドキュメント化用
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'ボタン',
    onClick: () => alert('ボタンがクリックされました'),
  },
};

export const Disabled: Story = {
  args: {
    children: '無効',
    onClick: () => {},
  },
};
