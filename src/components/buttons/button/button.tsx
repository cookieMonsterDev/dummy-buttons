import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import {  myEmitter } from '../../../typescript/buttonController';

const Container = styled.div`
  margin: auto;
  margin-top: 3em;
  margin-bottom: 3em;
  width: 22em;
  height: 22em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainButton = styled.button`

  -webkit-user-select: none;

  width: 100%;
  height: 100%;
  justify-content: center;
  align-Items: center;
  cursor: pointer;

  border-radius: 50%;
  border: none;
  background-color: #FF0000;
  box-shadow: 0 1em 0 rgb(183, 9, 0), 
  0 15px 20px rgba(0,0,0,.35);

  &:active {
    transform: translateY(1em);
    box-shadow: 0 0 1em rgb(183, 0, 0), 
    0 8px 6px rgba(0,0,0,.45);
    transition: 300ms all
  }

  &:disabled {
    pointer-events: none;
    background-color: #BDBDBD;
    box-shadow: 0 1em 0 rgb(147,147,147);

    span {
      text-shadow: 0 4px 1px rgba(152, 152, 152, 0.8);
    }
  }
`

const ButtonText = styled.span`
  color: #FFFFFF;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 4px 1px rgba(122,17,8,.8);
  font-family: Avenir, Arial, sans-serif;
  font-weight: 900;
  font-size: 2.5em;
`;

export type ButtonProps = {
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {

  const [disabled, setDisabled] = useState(false);

  // myEmitter.on('test', console.log('worked'))

  return (
    <Container>
      <MainButton 
        onClick={()=>{}}
        disabled={disabled}>
        <ButtonText>
          big red button!
        </ButtonText>
      </MainButton>
    </Container>
  );
};

