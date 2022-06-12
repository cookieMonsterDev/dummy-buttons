import { setLocalSorageData, getLocalSorageData } from '../storeData/storeDataToLocalStorage';
import { themeMode } from '../../containers/wrapper';

interface Theme {
  body: string;
  text: string;
};

const darkModeKey = 'isDarkModeActive';

const value = getLocalSorageData(darkModeKey);

export const setDefaultMode = () => {
  if (value === undefined ) {
   return setLocalSorageData(darkModeKey, false)
  }
  return value
};

export const setDarkModeLocalStorage = (theme: object) => {
  theme === themeMode.lightTheme 
  ? setLocalSorageData(darkModeKey, true)
  : setLocalSorageData(darkModeKey, false)
};

export const getThemeMode = (): Theme => {
  const value =  localStorage.getItem(darkModeKey);
  
  if ( value === 'true' ) {
    return themeMode.darkTheme
  }
  return themeMode.lightTheme 
};
