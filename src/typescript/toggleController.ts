import { ToggleProps } from '../components/buttons/toggle/toggle';
import { getLocalSorageData } from './storeDataToLocalStorage';

interface LocalStorageData {
  DarkModeKey: string,
  IsButtonDisabled: string,
};

const Data: LocalStorageData = {
  DarkModeKey: 'isDarkModeActive',
  IsButtonDisabled: 'isButtonDisabled',
};

export const isToggleOn = (props: ToggleProps): boolean => {
  if ( props.toggleId === 1) {
    return getLocalSorageData(Data.DarkModeKey) === 'true' ? true : false
  }
  else if ( props.toggleId === 2) {
    return getLocalSorageData(Data.IsButtonDisabled) === 'true' ? true : false
  }
  return false
}
