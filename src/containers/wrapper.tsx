import React, { useState } from "react";
import styled from "styled-components";

export interface WrapperProps {
  children?: React.ReactNode;
  color?: string;
  handleTheme?: () => void;
};

const Container = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${props => props.color }
`

export const Wrapper = (props: WrapperProps) => {

  const [theme, setTheme] = useState("black")

  const handleTheme = () => {
    theme === "black" ? setTheme("white"): setTheme("black")
  }

  const childrenWithProps = React.Children.map(props.children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleTheme });
    }
    return child;
  });

  return(
    <Container color={theme} > 
      { childrenWithProps }
    </Container>
  );
  }