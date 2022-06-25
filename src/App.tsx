import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// components
import { Wrapper } from './containers/wrapper';
import { Button } from './components/buttons/button/button';
import { SettingsMenu } from './components/settings/settings';
import { darkModeController } from './typescript/darkMode';
 
const App = () => {

  const [theme, setTheme] = useState(() => {return darkModeController()})

  const handleTheme = () => {
    return setTheme(darkModeController());
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button />
        <SettingsMenu handleTheme={handleTheme}/>
      </Wrapper> 
    </ThemeProvider>
  )
}

export default App;