import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dialogConttroller } from '../../typescript/dialogContoroller';

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
  z-index: 10;
`;

const ModalDialog = styled.div`
  width: 40em;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  background-color: black;

  border-style: solid;
  border-radius: 4em;
  border-width: 0.3em;
  border-color: green;
`;

const DialogName = styled.span`
  justify-content: center;
  align-items: center;
  margin-bottom: 0.6em;
  color: white;

  font-family: Avenir, Arial, sans-serif;
  font-weight: 600;
  font-size: 2em;
`;

const DialogText = styled.div`
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  margin-bottom: 0.2em;
  color: white;

  text-align: center;
  font-family: Avenir, Arial, sans-serif;
  font-weight: 600;
  font-size: 1em;
`;

const DialogButton = styled.button`
  width: 8em;
  height: 1.8em;
  background-color: green;

  color: #FFFFFF;
  text-transform: uppercase;
  text-align: center;
  font-family: Avenir, Arial, sans-serif;
  font-weight: 600;
  font-size: 1.5em;

  border-style: solid;
  border-radius: 4em;
  border-width: 0.3em;
  border-color: green;
`;

interface DialogProps {
};

export const Dialog = (props: DialogProps) => {

  const [isDialogEnabled, setEnabled] = useState(dialogConttroller.isShown())

  useEffect(() => {
    dialogConttroller.on('shown', () => {setEnabled(dialogConttroller.isShown())});

    return () => dialogConttroller.off('shown', () => {setEnabled(dialogConttroller.isShown())});
  }, []);

  return <>{ isDialogEnabled ? 
    <Container>
      <ModalDialog>
        <DialogName>Modal dialog</DialogName>
        <DialogText>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Culpa vitae nulla, aut quo nam nihil nostrum odio consequatur. 
          Nostrum quos corporis eveniet, perspiciatis fuga repellat. 
          Non blanditiis ducimus placeat. Perspiciatis!
        </DialogText>
        <DialogButton onClick={() => {dialogConttroller.updateShown()}}>
          CLOSE
        </DialogButton>
      </ModalDialog>
    </Container>
    : null}
    </>;  
};