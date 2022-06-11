import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export interface WrapperProps {
  children?: React.ReactNode;
  handleTheme?: () => void;
};

const themeMode = {

  lightTheme: {
    body: '#DEE4E7',
    text: 'red'
  },

  darkTheme: {
    body: '#37474F',
    text: 'blue'
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.theme.body};

  div > div {
    color: ${props => props.theme.text };
  }

  div > div > label > div {
    background: ${props => props.theme.text };
  }
`;

export const Wrapper = (props: WrapperProps) => {

  const [theme, setTheme] = useState(themeMode.lightTheme)

  const handleTheme = () => {
    if (theme === themeMode.lightTheme) {
      localStorage.setItem('theme', JSON.stringify(themeMode.darkTheme));
      return setTheme(themeMode.darkTheme)
    }
    localStorage.setItem('theme', JSON.stringify(themeMode.lightTheme));
    return setTheme(themeMode.lightTheme);
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