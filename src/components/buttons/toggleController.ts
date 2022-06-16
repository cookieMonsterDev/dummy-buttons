import { ToggleProps } from './toggle';

export const isToggleOn = (props: ToggleProps): boolean => {
  if ( props.toggleId === '1') {
    return getDataFormLocalStorage()
  }
  else if ( props.toggleId === '2') {
    return false
  }
  return false
}

const getDataFormLocalStorage = () => {
 let darkMode = localStorage.getItem('isDarkModeActive')
 return darkMode === 'true' ? true : false
} 
