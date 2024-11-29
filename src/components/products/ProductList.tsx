import { ProductItem } from './ProductItem';
import { Product } from '@/types/product';
import styled from 'styled-components';

type ProductListProps = {
  products: Product[];
  onAddToCart: (id: number) => void;
};

export const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  return (
    <ListContainer>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
