import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CartPage } from './CartPage';
import { CartProvider } from '@/hooks/useCart';

export default {
  title: 'Pages/CartPage',
  component: CartPage,
  decorators: [
    (Story) => (
      <CartProvider>
        <Story />
      </CartProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <CartPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  cartItems: [
    {
      id: '1',
      name: 'サンプル商品A',
      price: 1200,
      quantity: 2,
    },
    {
      id: '2',
      name: 'サンプル商品B',
      price: 3500,
      quantity: 1,
    },
  ],
  totalPrice: 5900,
};

export const Empty = Template.bind({});
Empty.args = {
  cartItems: [],
  totalPrice: 0,
};
