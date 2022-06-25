import { getLocalSorageData, setLocalSorageData } from "./storeDataToLocalStorage";

// const EventEmitter = require('events');

// interface ButtonController {
//   isDisabled: boolean,
//   localStorageValue: string,
// };

// const ButtonController: ButtonController = {
//   isDisabled: false,
//   localStorageValue: 'isButtonDisabled',
// };

// const IsOn = getLocalSorageData(ButtonController.localStorageValue);

// if (!IsOn) {
//   setLocalSorageData(ButtonController.localStorageValue, false);
// };

// export const buttonController = () => {
//   const IsOn = getLocalSorageData(ButtonController.localStorageValue);
   
//   if (IsOn === 'false') {
//     setLocalSorageData(ButtonController.localStorageValue, true);
//   }
//   setLocalSorageData(ButtonController.localStorageValue, false);
// };

// class MyEmitter extends EventEmitter {
//   buttonController = () => {
//     this.emit('event');
//   };
// }

// export const myEmitter = new MyEmitter();

// export const IsEnabled = () => {
//   const IsOn = getLocalSorageData(ButtonController.localStorageValue);
  
//   if (IsOn === 'true') {
//     return true;
//   }
//   return false
// }


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  foo() {
    this.emit('test');
  }
}
export const myEmitter = new MyEmitter();

myEmitter.on('test', () => console.log('done'));