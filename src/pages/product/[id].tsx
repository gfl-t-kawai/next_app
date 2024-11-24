import { useRouter } from 'next/router';
import { ProductDetails } from '@/components/products/ProductDetails';
import { getProductById } from '@/services/productService';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const product = getProductById(id as string);

  if (!product) return <p>Product not found</p>;

  return <ProductDetails product={product} />;
};

export default ProductPage;
