import { IThemePalette } from '.';
import { green, orange, paleRed, purple, red, rhino } from '../colors';

const solarized: IThemePalette = {
  mode: 'dark',
  text: {
    primary: 'rgb(255,255,255)',
    secondary: 'rgb(229, 231, 235)',
    disabled: 'rgb(156, 163, 175)',
  },
  primary: rhino,
  secondary: paleRed,
  system: {
    purple: purple,
    orange: orange,
    green: green,
    red: red,
  },
  background: {
    paper: '#23354E',
    default: '#1B2A3F',
  },
};

export default solarized;
