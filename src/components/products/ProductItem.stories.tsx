import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProductItem } from "./ProductItem";
import { Product } from "@/types/product";
import { action } from "@storybook/addon-actions";

// Storybookのメタデータ
export default {
  title: "Components/ProductItem",
  component: ProductItem,
} as Meta<typeof ProductItem>;

// テンプレートを作成
const Template: StoryFn<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);


// デフォルトストーリー
export const Default = Template.bind({});
Default.args = {
  product: {
    id: 1,
    name: "サンプル商品",
    price: 2500,
    image: "/images/dummy.png",
    stock: 10,
    description: "これはサンプル商品です。",
  } as Product,
  onAddToCart: action("onAddToCart"),
};

// カスタムストーリー
export const PremiumProduct = Template.bind({});
PremiumProduct.args = {
  product: {
    id: 2,
    name: "サンプル商品",
    price: 599900,
    image: "/images/dummy.png",
    stock: 0,
    description: "これはサンプル商品です。",
  } as Product,
  onAddToCart: action("onAddToCart"),
};
