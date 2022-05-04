import { IThemePalette } from '.';
import { green, orange, purple, red } from '../colors';

const dark: IThemePalette = {
  mode: 'dark',
  text: {
    primary: '#BDBDBD',
    // secondary: '',
    // disabled: '',
  },
  system: {
    purple: purple,
    orange: orange,
    green: green,
    red: red,
  },
  background: {
    default: '#0A0A0A',
    paper: '#191919',
  },
};

export default dark;
