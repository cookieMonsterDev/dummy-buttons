import { getLocalSorageData, setLocalSorageData } from "./storeDataToLocalStorage";

const ButtonControllerEmitter = require('events');

const LocalStorageValue = 'isButtonDisabled';

class ButtonController extends ButtonControllerEmitter {
  
  // Change button state in local storage
  updateState = () => {
    const IsOn = getLocalSorageData(LocalStorageValue);

    if (!IsOn) {
      return setLocalSorageData(LocalStorageValue, true);
    } 
    else if (IsOn === 'false') {
      setLocalSorageData(LocalStorageValue, true);
      return this.emit('update-state');
    }
    setLocalSorageData(LocalStorageValue, false);
    return this.emit('update-state');
  };

  // Return button state
  isEnabled = () => {
    const IsOn = getLocalSorageData(LocalStorageValue);
  
    return IsOn === 'true' ? true : false;
  };
};

export const buttonController = new ButtonController();
