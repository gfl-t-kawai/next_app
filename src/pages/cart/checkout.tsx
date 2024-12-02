import styled from 'styled-components';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/common/Button';

export const CheckoutPage = () => {
  const { cartItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return <p>カートに商品がありません。</p>;
  }

  const handleOrderConfirm = () => {
    // 注文確定処理を実装
    console.log('Order Confirmed');
  };

  return (
    <Container>
      <h1>購入確認</h1>
      <OrderSummary>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} x {item.quantity} ( {new Intl.NumberFormat().format(item.price * item.quantity)}円)
            </p>
          </div>
        ))}
        <h2>合計: {new Intl.NumberFormat().format(totalPrice)}円</h2>
      </OrderSummary>
      <Button onClick={handleOrderConfirm} href="/cart/order-confirmation">
        注文を確定する
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const OrderSummary = styled.div`
  margin-bottom: 20px;
`;

export default CheckoutPage;
