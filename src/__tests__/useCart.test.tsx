import { render, screen, act } from "@testing-library/react";
import { CartProvider, useCart } from "../hooks/useCart";

const TestComponent = () => {
  const { addToCart, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <div>
      <button
        data-testid="add-item"
        onClick={() =>
          addToCart({
            id: 1,
            name: "Test Item",
            price: 100,
            quantity: 0,
          })
        }
      >
        Add Item
      </button>
      <button
        data-testid="update-quantity"
        onClick={() => updateQuantity(1, 2)}
      >
        Update Quantity
      </button>
      <button data-testid="remove-item" onClick={() => removeItem(1)}>
        Remove Item
      </button>
      <div data-testid="total-price">{totalPrice}</div>
    </div>
  );
};

describe("CartProvider", () => {
  it("provides the initial state correctly", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // 初期状態でカートの合計金額が0であることを確認
    expect(screen.getByTestId("total-price")).toHaveTextContent("0");
  });

  it("adds an item to the cart", async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      screen.getByTestId("add-item").click();
    });

    // カートの合計金額が更新されていることを確認
    expect(screen.getByTestId("total-price")).toHaveTextContent("100");
  });

  it("updates the quantity of an item in the cart", async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // アイテムを追加してから数量を更新
    await act(async () => {
      screen.getByTestId("add-item").click();
    });
    await act(async () => {
      screen.getByTestId("update-quantity").click();
    });

    // カートの合計金額が更新されていることを確認
    expect(screen.getByTestId("total-price")).toHaveTextContent("200");
  });

  it("removes an item from the cart", async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      screen.getByTestId("add-item").click();
    });
    await act(async () => {
      screen.getByTestId("remove-item").click();
    });

    // カートの合計金額が0に戻ることを確認
    expect(screen.getByTestId("total-price")).toHaveTextContent("0");
  });
});
