import Link from 'next/link';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: number) => void;
};

export const ProductItem: React.FC<ProductItemProps> = ({ id, name, price, imageUrl, onAddToCart }) => {
  return (
    <Card>
      <Link href={`/product/${id}`}>
        <img src={imageUrl} alt={name} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
      </Link>
      <h3>{name}</h3>
      <p>{`¥${price.toLocaleString()}`}</p>
      <Button onClick={() => onAddToCart(id)}>カートに追加</Button>
    </Card>
  );
};
