import React from 'react';
import { Wrapper } from './containers/wrapper';
import { Button } from './components/buttons/button';
import { ToggleMenu } from './components/settings/settings';
// import { setDefaultMode } from './typescript/darkMode/darkMode';
 
const App = () => {

  // setDefaultMode()

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