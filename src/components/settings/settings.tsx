import styled from "styled-components";
import { Toggle } from "../buttons/toggle";
import { WrapperProps } from "../../containers/wrapper";

const Container = styled.div`
  width: 25em;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ToggleMenu = (props: WrapperProps) => {
  
  return (
      <Container>
          <Toggle toggleText={"Dark mode"} onChange={() => {props.handleTheme?.()}}/>
          <Toggle toggleText={"Disable main button"} onChange={() => {}}/>
          <Toggle toggleText={"Sth"} onChange={() => {console.log("Sth")}}/>
      </Container>
  );
};