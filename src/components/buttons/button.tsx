import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  margin-top: 3em;
  margin-bottom: 3em;
  width: 26em;
  height: 26em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainButton = styled.button`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-Items: center;

  border-radius: 50%;
  border-style: outset;
  border-color: #808080;
  border-width: 1em;
`

export type ButtonProps = {
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {

  return (
    <Container>
      <MainButton>
        <>test</>
      </MainButton>
    </Container>
  );
};

