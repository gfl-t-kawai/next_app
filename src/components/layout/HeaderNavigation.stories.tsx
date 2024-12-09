import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HeaderNavigation } from './HeaderNavigation';

export default {
  title: 'Components/HeaderNavigation',
  component: HeaderNavigation,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;


const Template: StoryFn = () => <HeaderNavigation />;

export const Default = Template.bind({});
Default.args = {};
