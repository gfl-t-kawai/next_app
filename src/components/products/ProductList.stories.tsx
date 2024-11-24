import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProductList } from './ProductList';

export default {
  title: 'Components/ProductList',
  component: ProductList,
  argTypes: {
    onAddToCart: { action: 'addToCart' }, // Action loggerでクリックイベントを追跡
  },
} as Meta<typeof ProductList>;

const Template: StoryFn<typeof ProductList> = (args) => <ProductList {...args} />;

// デフォルトストーリー
export const Default = Template.bind({});
Default.args = {
  products: [
    { id: 1, name: 'Product A', price: 1999, imageUrl: '/images/asgnbwkpuwtlo2sbfp1a.png' },
    { id: 2, name: 'Product B', price: 2999, imageUrl: '/images/cswcnngmwthcr1o6qgxr.png' },
    { id: 3, name: 'Product C', price: 3999, imageUrl: '/images/fiq17k43u7gnwkzlmorh.png' },
  ],
  onAddToCart: (id: number) => console.log(`Product ${id} added to cart`),
};

// 空のリストのストーリー
export const EmptyList = Template.bind({});
EmptyList.args = {
  products: [],
  onAddToCart: (id: number) => console.log(`Product ${id} added to cart`),
};

// 多数の商品を表示するストーリー
export const LargeList = Template.bind({});
LargeList.args = {
  products: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (i + 1) * 1000,
    imageUrl: '/images/dummy.png',
  })),
  onAddToCart: (id: number) => console.log(`Product ${id} added to cart`),
};
