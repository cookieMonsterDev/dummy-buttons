import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// components
import { Wrapper } from './containers/wrapper';
import { Button } from './components/buttons/button/button';
import { SettingsMenu } from './components/settings/settings';
import { darkModeController } from './typescript/darkMode';
import { Dialog } from './components/dialog/dialog';
import { dialogConttroller } from './typescript/dialogContoroller';
 
const App = () => {

  const [theme, setTheme] = useState(() => {return darkModeController()});

  const handleTheme = () => {
    return setTheme(darkModeController());
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Dialog />
        <Button buttonAction={() => dialogConttroller.updateShown()}/>
        <SettingsMenu handleTheme={handleTheme}/>
      </Wrapper> 
    </ThemeProvider>
  )
}

export default App;