import React from 'react';
import styled from 'styled-components';
import { CartItemProps } from '@/types/cart';
import { RemoveButton } from '@/components/common/Button'

export const CartItem = ({ product, onUpdateQuantity, onRemove }: CartItemProps) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value, 10) || 1;
    onUpdateQuantity(product.id, quantity);
  };

  return (
    <ItemContainer>
      <ItemDetails>
        <p>{product.name}</p>
        <p>価格: {new Intl.NumberFormat().format(product.price)}円</p>
      </ItemDetails>
      <QuantityInput
        type="number"
        value={product.quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <RemoveButton onClick={() => onRemove(product.id)}>削除</RemoveButton>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const QuantityInput = styled.input`
  width: 50px;
  margin-right: 10px;
`;
