import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export interface WrapperProps {
  children?: React.ReactNode;
  handleTheme?: () => void;
};

const lightTheme = {
  body: '#DEE4E7',
  text: '#37474F'
};

const darkTheme = {
  body: '#37474F',
  text: '#DEE4E7'
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.theme.body};

  div {
    color: ${props => props.theme.text };
  }
`;

export const Wrapper = (props: WrapperProps) => {

  const [theme, setTheme] = useState(lightTheme)

  const handleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme): setTheme(lightTheme)
  }

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleTheme });
    }
    return child;
  });

  return(
    <ThemeProvider theme={theme}>
      <Container> 
        { childrenWithProps }
      </Container>
    </ThemeProvider>
  );
}