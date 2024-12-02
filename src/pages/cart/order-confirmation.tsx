import styled from 'styled-components';
import { Button } from '@/components/common/Button';

export const OrderConfirmationPage = () => {
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <Container>
      <h1>ご購入ありがとうございます！</h1>
      <p>ご注文番号: {orderNumber}</p>
      <p>お届け予定日: {new Date().toLocaleDateString()}</p>
      <Button href="/">ホームページに戻る</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export default OrderConfirmationPage;
