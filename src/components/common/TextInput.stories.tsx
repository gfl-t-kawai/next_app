// TextInput.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextInput } from './TextInput';

type TextInputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  };

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    value: { control: 'text' }, // テキスト入力用のコントロール
    placeholder: { control: 'text' }, // プレースホルダー用のコントロール
    onChange: { action: 'changed' }, // onChangeイベントをモック
  },
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Type something...',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  value: '',
  placeholder: 'Enter your text here',
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'Hello World',
};
