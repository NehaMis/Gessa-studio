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
    dashboardButtonBg:'#2979ff',
    dashboardButtonHover:'#44a3fb',

    sideBarBg:'#dbdbdb',
    sideBarText1:'#111827',
    sideBarText2:'#000',
    btnDisabled:'#ffffff1f',

    dropDownChip:'#57B4AA',

    errorMsg:'#FF0000',
    successMsg:'#52C41A',

    inputComponentBg:'#FCFCFB',

    dashboardTableHeadBg:'#F6F7F9',
    dashboardTableRowBg:'#2979ff',

    tablePaginationBg: '#1890FF',
    btnDeleteColor:'#FFFFFF',
  },
};

export default dark;
