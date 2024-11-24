import styled from 'styled-components';
import { Button } from '@/components/common/Button';

type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  stock: number;
};

type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const handleAddToCart = () => {
    console.log(`Product ${product.id} added to cart`);
  };

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Info>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>{product.stock > 0 ? `In Stock` : `Out of Stock`}</p>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
