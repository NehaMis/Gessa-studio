import { IThemePalette } from '.';
import black from '../colors/black';
import spearMint from '../colors/spearMint';
import white from '../colors/white';

const dark: IThemePalette = {
  mode: 'dark',
  text: {
    primary: '#BDBDBD',
    secondary: '#BDBDBD',
    disabled: '#BDBDBD',
  },
  primary: white,
  secondary: spearMint,
  common: {
    black: 'rgb(17, 24, 39)',
    white: 'rgb(255, 255, 255)',
  },
  // primary: white,
  background: {
    default: '#121212',
    paper: '#191919',
  },
  custom: {
    selectedText: '#303030',
    form1: '#155189',
    form2: '#2F2F2F',
    form3: '#292929',
    formError: 'red',
  },
};

export default dark;
