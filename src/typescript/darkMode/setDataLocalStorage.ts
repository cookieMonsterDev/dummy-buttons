import { themeMode } from "../../containers/wrapper"

export const setDarkModeLocalStorage = (theme: object) => {
  if (theme === themeMode.lightTheme) {
    return localStorage.setItem('isDarkModeActive', JSON.stringify(true))
  }
  return localStorage.setItem('isDarkModeActive', JSON.stringify(false))
}

export const getThemeMode = () => {
  let value = localStorage.getItem('isDarkModeActive');

  if (value === 'true') {
    return themeMode.darkTheme
  }
  return themeMode.lightTheme
}