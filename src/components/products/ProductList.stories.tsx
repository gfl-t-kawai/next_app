import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProductList } from './ProductList';
import { Product } from "@/types/product";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ProductList",
  component: ProductList,
} as Meta<typeof ProductList>;

const Template: StoryFn<typeof ProductList> = (args) => (
  <ProductList {...args} />
);


// デフォルトストーリー
export const Default = Template.bind({});
Default.args = {
  products: [
    {
      id: 1,
      name: "商品1",
      price: 1000,
      image: "/images/dummy.png",
      stock: 10,
      description: "これは商品1の説明です。",
    },
    {
      id: 2,
      name: "商品2",
      price: 2000,
      image: "/images/dummy.png",
      stock: 5,
      description: "これは商品2の説明です。",
    },
    {
      id: 3,
      name: "商品3",
      price: 3000,
      image: "/images/dummy.png",
      stock: 0,
      description: "これは商品3の説明です。",
    },
  ] as Product[],
  onAddToCart: action("onAddToCart"),
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
    name: `商品${i + 1}`,
    price: (i + 1) * 1000,
    image: '/images/dummy.png',
    stock: i,
    description: `これは商品${i + 1}の説明です。`,
  })),
  onAddToCart: (id: number) => console.log(`Product ${id} added to cart`),
};
