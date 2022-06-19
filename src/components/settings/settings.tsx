import { useEffect, useState } from "react";
import styled from "styled-components";
import { Toggle } from "../buttons/toggle";

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
  align-items: center;
  justify-content: center;
`;

const SettingsButtonSpan = styled.span`
  width: 100%; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 600;
  border-style: solid;
  border-width: 0.2em;
  border-radius: 4em;
  border-color: #B3B3B3;
  color: red;
  background-color: #737373;
`;

const SettingsButtonInput = styled.input`
  position: absolute;
  display: none;

  &:checked + ${SettingsButtonSpan} {
    color: black;
  }
`;

interface SettingsProps {
  handleTheme?: () => void;
  disableButton?: () => void;
  changeAction?: () => void;
}

export const SettingsMenu = (props: SettingsProps) => {

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
