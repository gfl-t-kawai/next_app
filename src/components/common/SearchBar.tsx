import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/common/Button';
import { TextInput } from '@/components/common/TextInput';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <Container>
      <TextInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
