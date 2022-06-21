import React from 'react';
import styled from 'styled-components';

export interface WrapperProps {
  children?: React.ReactNode;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.theme.globalBackground};
  transition: all 1.2s ease;
`;

export const Wrapper = (props: WrapperProps) => {
  return(
    <Container> 
      { props.children }
    </Container>
  );
}