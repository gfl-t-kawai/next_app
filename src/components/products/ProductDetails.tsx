import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/common/Button';
import { Product } from '../../types/product';
import { getProductById } from '@/services/productService';

type ProductDetailsProps = {
  productId: number;
};

export const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product) {
      console.log(`Product ${product.id} added to cart`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Image src={product?.image} alt={product?.name} />
      <Info>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <p>価格: {product?.price ? new Intl.NumberFormat().format(product.price) : 0}円</p>
        <p>{product?.stock ?? 0 > 0 ? `In Stock` : `Out of Stock`}</p>
        <Button onClick={handleAddToCart}>カートに追加</Button>
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
