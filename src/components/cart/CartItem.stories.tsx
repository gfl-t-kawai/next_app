import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CartItem } from './CartItem';
import { CartItemProps } from '@/types/cart';

export default {
  title: 'Components/CartItem',
  component: CartItem,
  argTypes: {
    onUpdateQuantity: { action: 'onUpdateQuantity' },
    onRemove: { action: 'onRemove' },
  },
} as Meta;

const Template: StoryFn<CartItemProps> = (args) => <CartItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: 1,
    name: 'サンプル商品',
    price: 1000,
    quantity: 1,
  },
  onUpdateQuantity: () => {},
  onRemove: () => {},
};
