import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SearchBar } from './SearchBar';

type SearchBarProps = {
    onSearch: (query: string) => void;
  };

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    onSearch: { action: 'searched' },
  },
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
