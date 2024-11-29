import { useRouter } from 'next/router';
import { ProductDetails } from '@/components/products/ProductDetails';
import { getProductById } from '@/services/productService';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const productId = parseInt(id as string, 10);
  const product = getProductById(productId);

  if (!product) return <p>Product not found</p>;

  return <ProductDetails productId={productId} />;
};

export default ProductPage;
