import { Product } from './product';

export type CartItem = Product & {
  quantity: number;
};

export type CartItemProps = {
  product: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  totalPrice: number;
};
