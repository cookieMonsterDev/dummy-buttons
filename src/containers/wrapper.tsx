import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { setDarkModeLocalStorage, getThemeMode } from '../typescript/darkMode/darkMode';

export interface WrapperProps {
  children?: React.ReactNode;
  handleTheme?: () => void;
};

export const themeMode = {

  lightTheme: {
    primary: '#f8f8ff',
    secondary: '#9d9d9d',
    body: '#DEE4E7',
    text: '#212121'
  },

  darkTheme: {
    primary: '#141414',
    secondary: '#9d9d9d',
    body: '#37474F',
    text: '#deb100'
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.theme.primary};

  div > div {
    color: ${props => props.theme.text };
  }
`;

export const Wrapper = (props: WrapperProps) => {

  const [theme, setTheme] = useState(getThemeMode)

  const handleTheme = () => {
    if (theme === themeMode.lightTheme) {
      setDarkModeLocalStorage(theme);
      return setTheme(themeMode.darkTheme)
    }
    setDarkModeLocalStorage(theme);
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