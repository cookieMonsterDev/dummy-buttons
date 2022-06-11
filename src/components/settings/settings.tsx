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

          <Toggle 
            toggleText={"Dark mode"} 
            toggleId={"1"} 
            onChange={() => {props.handleTheme?.()}}/>
          
          <Toggle 
            toggleText={"Disable main button"} 
            toggleId={"2"} 
            onChange={() => {}}/>
          
          <Toggle 
            toggleText={"Sth"} 
            toggleId={"3"} 
            onChange={() => {console.log("Sth")}}/>

      </Container>
  );
};
