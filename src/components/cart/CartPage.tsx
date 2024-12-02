import styled from 'styled-components';
import { CartItem } from '@/components/cart/CartItem';
import { Button } from '@/components/common/Button';
import { useCart } from '@/hooks/useCart';

export const CartPage = () => {
  const { cartItems, updateQuantity, removeItem, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return <p>カートに商品がありません。</p>;
  }

  return (
    <Container>
      <h1>カート</h1>
      <CartList>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </CartList>
      <Summary>
        <h2>合計: {new Intl.NumberFormat().format(totalPrice)}円</h2>
        <Button href="/cart/checkout">購入確認</Button>
      </Summary>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Summary = styled.div`
  margin-top: 20px;
  text-align: right;
`;
