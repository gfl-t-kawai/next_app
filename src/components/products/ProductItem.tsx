import Link from "next/link";
import Image from "next/image";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import styled from "styled-components";
import { Product } from "@/types/product";

type ProductItemProps = {
  product: Product;
  onAddToCart: (productId: number) => void; // カート追加関数を受け取る
};

export const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
  return (
    <Card>
      <Info>
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image ?? "/images/dummy.png"}
            alt={product.name}
            width={150}
            height={150}
            priority
          />
        </Link>
        <h3>{product.name}</h3>
        <p>価格: {product?.price ? new Intl.NumberFormat().format(product.price) : 0}円</p>
        <Button onClick={() => onAddToCart(product.id)}>カートに追加</Button>
      </Info>
    </Card>
  );
};

const Info = styled.div`
  margin-top: 8px;
  text-align: center;
`;
