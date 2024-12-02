import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string; 
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, href }) => {
  if (href) {
    return <StyledLink href={href}>{children}</StyledLink>;
  }

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const StyledLink = styled.a`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #005bb5;
  }
`;

const RemoveButton = styled(StyledButton)`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ff1a1a;
  }
`;

export { RemoveButton };
