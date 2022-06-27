import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogMassage = styled.div`
  width: 40em;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  border-style: solid;
  border-radius: 4em;
  border-width: 0.3em;
  border-color: green;
`;

const DialogButton = styled.button`
  width: 10em;
  height: 3em; 
  background-color: green;

  color: #FFFFFF;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 4px 1px rgba(122,17,8,.8);
  font-family: Avenir, Arial, sans-serif;
  font-weight: 600;
  font-size: 2em;

  border-style: solid;
  border-radius: 4em;
  border-width: 0.3em;
  border-color: green;
`

interface DialogProps {
  showDialog?: boolean,
  setShowDialog?: React.Dispatch<React.SetStateAction<boolean>>
};

export const Dialog = (props: DialogProps) => {

  return <>{ props.showDialog ? 
    <Container>
      <DialogMassage>
        <DialogButton onClick={() => {props.setShowDialog?.(false)}}>
          CLOSE
        </DialogButton>
      </DialogMassage>
    </Container>
    : null}
    </>;  
};