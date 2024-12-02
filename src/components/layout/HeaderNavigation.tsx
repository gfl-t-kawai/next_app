import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { SearchBar } from "../common/SearchBar";

export const HeaderNavigation: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <Header>
      <Link href="/" passHref>
        <Logo>NextJsEC</Logo>
      </Link>
      <SearchBar onSearch={handleSearch} />
      <Link href="/cart" passHref>
        <CartIcon as="a" aria-label="View Cart">🛒</CartIcon>
      </Link>
    </Header>
  );
};


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #0070f3;
`;

const CartIcon = styled.div`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #0070f3;
  }
`;
