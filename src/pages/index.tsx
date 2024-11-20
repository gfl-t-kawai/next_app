import { ProductList } from '../components/products/ProductList';
import { useState } from 'react';

const dummyProducts = [
  { id: 1, name: '商品1', price: 1000, imageUrl: '/images/asgnbwkpuwtlo2sbfp1a.png' },
  { id: 2, name: '商品2', price: 2000, imageUrl: '/images/cswcnngmwthcr1o6qgxr.png' },
  { id: 3, name: '商品3', price: 3000, imageUrl: '/images/fiq17k43u7gnwkzlmorh.png' },
];

const HomePage = () => {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (id: number) => {
    setCart((prevCart) => [...prevCart, id]);
    alert('カートに追加しました');
  };

  return (
    <div>
      <h1>商品一覧</h1>
      <ProductList products={dummyProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default HomePage;
