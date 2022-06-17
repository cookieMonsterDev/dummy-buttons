import { setLocalSorageData, getLocalSorageData } from '../storeData/storeDataToLocalStorage';
import { DarkTheme } from '../../styles/darkTheme';
import { LightTheme } from '../../styles/lightTheme'; 

const DarkModeKey = 'isDarkModeActive';
const IsOn = getLocalSorageData(DarkModeKey);

if (!IsOn) {
  setLocalSorageData(DarkModeKey, false);
};

export const darkModeController = () => {
  const IsOn = getLocalSorageData(DarkModeKey);
   
  if (IsOn === 'false') {
    setLocalSorageData(DarkModeKey, true);
    return DarkTheme;
  }
  setLocalSorageData(DarkModeKey, false);
  return LightTheme;
};
