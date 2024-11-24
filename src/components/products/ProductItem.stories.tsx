import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProductItem } from './ProductItem';

// Storybookのメタデータ
export default {
  title: 'Components/ProductItem',
  component: ProductItem,
  argTypes: {
    onAddToCart: { action: 'addToCart' },
  },
} as Meta<typeof ProductItem>;

// テンプレートを作成
const Template: StoryFn<typeof ProductItem> = (args) => <ProductItem {...args} />;

// デフォルトストーリー
export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: 'Sample Product',
  price: 1999,
  imageUrl: '/images/asgnbwkpuwtlo2sbfp1a.png',
  onAddToCart: (id: number) => console.log(`Product ${id} added to cart`),
};

// カスタムストーリー
export const PremiumProduct = Template.bind({});
PremiumProduct.args = {
  id: 2,
  name: 'Premium Product',
  price: 4999,
  imageUrl: '/images/asgnbwkpuwtlo2sbfp1a.png',
  onAddToCart: (id: number) => console.log(`Premium Product ${id} added to cart`),
};
