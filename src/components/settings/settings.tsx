import { useEffect, useRef, useState } from "react";
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

const SettingsButtonlabel = styled.label`
  width: 12em; 
  height: 3em;
  margin: 3em;
  display: flex;
  justify-content: center;
  background-color: #B3B3B3;
  border-radius: 4px;
`;

const SettingsButtonInput = styled.input`
  position: absolute;
  display: none;
`;

const SettingsButtonSpan = styled.span`
  width: 100%; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 600;
`;

export const ToggleMenu = (props: ToggleMenuProps) => {

  const [extended, setExtended] = useState(false);

  useEffect(() => {}, []);
  
  if (extended) {
    return (
      <Container>
        <SettingsButtonlabel>
          <SettingsButtonInput type="checkbox" onChange={() => setExtended(!extended)} />
          <SettingsButtonSpan>SETTINGS</SettingsButtonSpan>
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
          <SettingsButtonInput type="checkbox" onChange={() => setExtended(!extended)} />
          <SettingsButtonSpan>SETTINGS</SettingsButtonSpan>
      </SettingsButtonlabel> 
    </Container>
  );
};
