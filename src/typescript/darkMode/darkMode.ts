import { setLocalSorageData, getLocalSorageData } from '../storeData/storeDataToLocalStorage';
import { darkTheme } from '../../styles/darkTheme';
import { lightTheme } from '../../styles/lightTheme'; 

const darkModeKey = 'isDarkModeActive';

const value = getLocalSorageData(darkModeKey);

export const setDefaultMode = () => {
  if (value === undefined ) {
   return setLocalSorageData(darkModeKey, false)
  }
  return value
};

export const setDarkModeLocalStorage = (theme: object) => {
  theme === lightTheme 
  ? setLocalSorageData(darkModeKey, true)
  : setLocalSorageData(darkModeKey, false)
};

export const getThemeMode = (): object => {
  const value = localStorage.getItem(darkModeKey);
  
  if ( value === 'true' ) {
    return darkTheme
  }
  return lightTheme 
};
