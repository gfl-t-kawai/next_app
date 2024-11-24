import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProductDetails } from './ProductDetails';

export default {
  title: 'Components/ProductDetails',
  component: ProductDetails,
} as Meta<typeof ProductDetails>;

const Template: StoryFn<typeof ProductDetails> = (args) => <ProductDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: '1',
    name: 'Sample Product',
    image: '/images/asgnbwkpuwtlo2sbfp1a.png',
    description: 'This is a sample product description.',
    price: 29.99,
    stock: 10,
  },
};

export const OutOfStock = Template.bind({});
OutOfStock.args = {
  product: {
    id: '2',
    name: 'Out of Stock Product',
    image: '/images/cswcnngmwthcr1o6qgxr.png',
    description: 'This product is currently out of stock.',
    price: 49.99,
    stock: 0,
  },
};

export const ExpensiveProduct = Template.bind({});
ExpensiveProduct.args = {
  product: {
    id: '3',
    name: 'Luxury Item',
    image: '/images/xhxbjzqmfaa4et8q63bo.png',
    description: 'A high-end luxury item with premium features.',
    price: 999.99,
    stock: 5,
  },
};
