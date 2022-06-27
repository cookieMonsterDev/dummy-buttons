import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// components
import { Wrapper } from './containers/wrapper';
import { Button } from './components/buttons/button/button';
import { SettingsMenu } from './components/settings/settings';
import { darkModeController } from './typescript/darkMode';
import { Dialog } from './components/dialog/dialog';
 
const App = () => {

  const [theme, setTheme] = useState(() => {return darkModeController()});
  const [showDialog, setShowDialog] = useState(false);

  const handleDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleTheme = () => {
    return setTheme(darkModeController());
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Dialog showDialog={showDialog} setShowDialog={setShowDialog}/>
        <Button buttonAction={handleDialog}/>
        <SettingsMenu handleTheme={handleTheme}/>
      </Wrapper> 
    </ThemeProvider>
  )
}

export default App;