import { Product } from '../types/product';

const BASE_URL = '/api/products';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID: ${id}`);
  }
  return response.json();
};
