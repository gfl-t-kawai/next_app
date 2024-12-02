import { useEffect, useState } from 'react';
import { getAllProducts } from '@/services/productService';
import { ProductList } from '@/components/products/ProductList';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
      } catch {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    console.log('Selected product:', product); 
    if (product) {
      const cartItem = { ...product, quantity: 1 };
      addToCart(cartItem);
      alert('カートに追加しました');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>商品一覧</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default HomePage;
