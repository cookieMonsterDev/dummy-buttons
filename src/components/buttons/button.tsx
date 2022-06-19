import React from 'react';
import styled, { css } from 'styled-components';

const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

const Container = styled.button<ButtonProps>`
  width: 25em;
  height: 25em;
  border-radius: 50%;
  justify-content: center;
  align-Items: center;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`
const MainButtonContainer = styled.div`
  margin: auto;
  width: 25em;
  height: 25em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type ButtonProps = {
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  doSomething?: () => void;
}

export const Button = ({
  // onClick,
  children,
  color = 'primary',
  disabled,
  doSomething,
}: ButtonProps) => {

  return (
    <MainButtonContainer>
      <Container onClick={doSomething} color={color} disabled={disabled}>
        <>test</>
      </Container>
    </MainButtonContainer>
  );
};

