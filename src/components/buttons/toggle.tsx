import { useState } from 'react';
import styled from 'styled-components';
import { isToggleOn } from './toggleController'

const Container = styled.div`
  width: 100%;
  margin: 0.3em 0 0.3em 0;
  padding: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.textColorPrimary};
  font-size: 1.4em;
  font-weight: 600;
`

const Label = styled.label`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: ${props => props.theme.toggleBackground};
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: #FFFFFF;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${props => props.theme.toggleBackgroundActive};

    &:before {
      transform: translate(32px, -50%);
      background: #FFFFFF;
    }
  }
`;

export type ToggleProps = {
  toggleId?: string;
  toggleText?: string;
  onChange?: () => void;
};

export const Toggle = (props: ToggleProps) => {

  const [checked, setChecked] = useState(isToggleOn(props));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Container>
        <Label>
        <Input 
          checked={checked} 
          type="checkbox" 
          onChange={(e) => {handleChange(e); props.onChange?.();}} />
          <Switch />
        </Label>
        {props.toggleText}
    </Container>
  )
};
