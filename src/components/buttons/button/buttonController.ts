import { getLocalSorageData, setLocalSorageData } from "../../../typescript/storeData/storeDataToLocalStorage";

const DisabledButton = 'isButtonDisabled';
const IsOn = getLocalSorageData(DisabledButton);

if (!IsOn) {
  setLocalSorageData(DisabledButton, false);
};

export const buttonController = () => {
  const IsOn = getLocalSorageData(DisabledButton);
   
  if (IsOn === 'false') {
    setLocalSorageData(DisabledButton, true);
    return true;
  }
  setLocalSorageData(DisabledButton, false);
  return false;
};