import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 25em;
  height: 25em;
  border-radius: 50%;
  justify-content: center;
  align-Items: center;
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

export const Button = (props: ButtonProps) => {

  return (
    <MainButtonContainer>
      <Container>
        <>test</>
      </Container>
    </MainButtonContainer>
  );
};

