import { ProductItem } from './ProductItem';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type ProductListProps = {
  products: Product[];
  onAddToCart: (id: number) => void;
};

export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};
