import { IThemePalette } from '.';
import { green, orange, purple, red } from '../colors';

const dark: IThemePalette = {
  mode: 'light',
  text: {
    primary: 'rgb(17, 24, 39)',
    secondary: 'rgb(107, 114, 128)',
    disabled: 'rgb(149, 156, 169)',
  },
  common: {
    black: 'rgb(17, 24, 39)',
    white: 'rgb(255, 255, 255)',
  },
  system: {
    purple: purple,
    orange: orange,
    green: green,
    red: red,
  },
  background: {
    paper: '#FFFFFF',
    default: '#f6f7f9',
  },
};

export default dark;
