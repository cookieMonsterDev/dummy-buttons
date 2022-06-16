import { setLocalSorageData, getLocalSorageData } from '../storeData/storeDataToLocalStorage';
import { darkTheme } from '../../styles/darkTheme';
import { lightTheme } from '../../styles/lightTheme'; 

const darkModeKey = 'isDarkModeActive';
const isOn = getLocalSorageData(darkModeKey);

if (isOn === null) {
  setLocalSorageData(darkModeKey, false);
};

export const darkModeController = () => {
  const isOn = getLocalSorageData(darkModeKey);
   
  if (isOn === 'false') {
    setLocalSorageData(darkModeKey, true);
    return darkTheme;
  }
  setLocalSorageData(darkModeKey, false);
  return lightTheme;
};
