import { useState } from "react";
import styled from "styled-components";
import { Toggle } from "../buttons/toggle";

interface ToggleMenuProps {

  handleTheme?: () => void;
  disableButton?: () => void;
  changeAction?: () => void;
}

const Container = styled.div`
  width: 25em;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SettingsButton = styled.input`
  margin: 5em;
`;

const SettingsButtonlabel = styled.label`

`;

export const ToggleMenu = (props: ToggleMenuProps) => {

  const [extended, setExtended] = useState(false);
  
  if (extended) {
    return (
      <Container>
        <SettingsButtonlabel>
          <SettingsButton type="checkbox" onChange={() => setExtended(!extended)} />
        </SettingsButtonlabel> 
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
  }
  else return (
    <Container>
      <SettingsButtonlabel>
          <SettingsButton type="checkbox" onChange={() => setExtended(!extended)} />
      </SettingsButtonlabel> 
    </Container>
  );
};
