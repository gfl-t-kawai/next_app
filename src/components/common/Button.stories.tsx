import { Meta, StoryObj } from '@storybook/react';
import { Button, RemoveButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
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

export const LinkButton: Story = {
  args: {
    children: 'リンクボタン',
    href: 'https://example.com', // リンク先URLを指定
  },
};

// RemoveButton用のストーリーを追加
const removeMeta: Meta<typeof RemoveButton> = {
  title: 'Common/RemoveButton',
  component: RemoveButton,
  tags: ['autodocs'],
};

export const Remove: StoryObj<typeof RemoveButton> = {
  args: {
    children: '削除ボタン',
    onClick: () => alert('削除ボタンがクリックされました'),
  },
};

export { removeMeta as removeMeta };
