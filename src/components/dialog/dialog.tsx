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
  background-color: black;

  border-style: solid;
  border-radius: 4em;
  border-width: 0.3em;
  border-color: green;
`;

export const Dialog = () => {
 
  return (
    <Container>
      <DialogMassage>

      </DialogMassage>
    </Container>
  )
};