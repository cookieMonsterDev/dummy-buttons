import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// components
import { Wrapper } from './containers/wrapper';
import { Button } from './components/buttons/button';
import { ToggleMenu } from './components/settings/settings';
import { darkModeController } from './typescript/darkMode/darkMode';
 
const App = () => {

  const [theme, setTheme] = useState(darkModeController())

  const handleTheme = () => {
    return setTheme(darkModeController())
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button />
        <ToggleMenu handleTheme={handleTheme}/>
      </Wrapper> 
    </ThemeProvider>
  )
}

export default App;