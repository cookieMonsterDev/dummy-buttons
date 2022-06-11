import React from 'react';
import { Wrapper, WrapperProps } from './containers/wrapper';
import { Button } from './components/buttons/button';
import { ToggleMenu } from './components/settings/settings';
 
const App = () => {

  return (
    <>
    <Wrapper>
      <Button />
      <ToggleMenu />
    </Wrapper> 
    </>
  )
}

export default App;