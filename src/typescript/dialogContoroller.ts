
const DialogConttrollerEmmiter = require('events'); 

interface DialogInterface {
  isDialogEnabled: boolean,
  isDialogShown: boolean,
};

const DialogDefaultSetup: DialogInterface = {
  isDialogEnabled: false,
  isDialogShown: false,
};

class DialogConttroller extends DialogConttrollerEmmiter {

  updateSate = () => {
    if (DialogDefaultSetup.isDialogEnabled === false) {
      DialogDefaultSetup.isDialogEnabled = true;
      return this.emit('changed');
    }
    DialogDefaultSetup.isDialogEnabled = false;
    return this.emit('changed');
  }; 

  isEnabled = () => {
    return DialogDefaultSetup.isDialogEnabled;
  };

  updateShown = () => {
    if (DialogDefaultSetup.isDialogShown === false 
      && DialogDefaultSetup.isDialogEnabled === true) {
        DialogDefaultSetup.isDialogShown = true;
      return this.emit('shown');
    }
    DialogDefaultSetup.isDialogShown = false;
    return this.emit('shown');
  };

  isShown = () => {
    return DialogDefaultSetup.isDialogShown;
  };
};

export const dialogConttroller = new DialogConttroller();