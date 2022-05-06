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
    inputNode: '#ffbf00',
    transformNode: '#BA55D3',
    storeNode: '#33b64d',
    outputNode: '#33b64d',
    btnColor: '#3399FF',
    dashboardButtonBg:'#272727',
    dashboardButtonHover:'#525252',

    sideBarBg:'#191919',
    sideBarText1:'#BDBDBD',
    sideBarText2:'#FFFFFF',

    errorMsg:'#FF0000',

    inputComponentBg:'#2B2B2B',

    dashboardTableRowBg:'#121212',
    tablePaginationBg: '#1890FF',
  },
};

export default dark;
