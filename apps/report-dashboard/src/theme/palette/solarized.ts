import { IThemePalette } from '.';
import { paleRed, rhino } from '../colors';
import white from '../colors/white';

const solarized: IThemePalette = {
  mode: 'dark',
  text: {
    primary: 'rgb(255,255,255)',
    secondary: 'rgb(229, 231, 235)',
    disabled: 'rgb(156, 163, 175)',
  },
  primary: white,
  secondary: rhino,
  background: {
    paper: '#23354E',
    default: '#1B2A3F',
  },
  custom: {
    selectedText: '#303030',
    form1: '#155189',
    form2: '#23354E',
    form3: '#23354E',
    formError: 'red',
    inputNode: '#ffbf00',
    transformNode: '#BA55D3',
    storeNode: '#BA55D3',
    outputNode: '#33b64d',

    dashboardButtonBg:'#2e3f57',
    dashboardButtonHover:'#3b5272',

    sideBarBg:'#476185',
    sideBarText1:'#BDBDBD',
    sideBarText2:'#FFFFFF',
    btnDisabled:'#ffffff1f',

    dropDownChip:'#57B4AA',

    errorMsg:'#FF0000',
    successMsg:'#52C41A',

    inputComponentBg:'#2E3F57',

    dashboardTableHeadBg:'#1B2A3F',
    dashboardTableRowBg:'#2E3F57',

    tablePaginationBg: '#1890FF',
    btnDeleteColor:'#FFFFFF',
  },
};

export default solarized;
