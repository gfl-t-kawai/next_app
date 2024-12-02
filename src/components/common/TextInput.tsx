import React from 'react';
import styled from 'styled-components';

type TextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return <StyledInput type="text" value={value} onChange={onChange} placeholder={placeholder} />;
};

const StyledInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;
