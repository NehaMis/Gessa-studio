import { IThemePalette } from '.';
import black from '../colors/black';
import spearMint from '../colors/spearMint';

const dark: IThemePalette = {
  mode: 'light',
  text: {
    primary: 'rgb(17, 24, 39)',
    secondary: 'rgb(107, 114, 128)',
    disabled: 'rgb(149, 156, 169)',
  },
  primary: black,
  secondary: spearMint,
  common: {
    black: 'rgb(17, 24, 39)',
    white: 'rgb(255, 255, 255)',
  },
  background: {
    paper: '#FFFFFF',
    default: '#f6f7f9',
  },
  custom: {
    selectedText: '#303030',
    form1: '#155189',
    form2: '#FFFFFF',
    form3: '#FFFFFF',
    formError: 'red',
    inputNode: '#ffbf00',
    transformNode: '#BA55D3',
    storeNode: '#BA55D3',
    outputNode: '#33b64d',
  },
};

export default dark;
