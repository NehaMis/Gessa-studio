import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import AddReport from '../pages/AddReport';
import Filter from '../pages/Filter';
// import Filter from '../pages/Filter';

export interface SideMenuType {
  width: string;
  snackBarArgs: any;
  setSnackBarArgs: (data:any) => void;
  onClose: () => void;
  menuComponent: string;
}

function SideMenu(props: SideMenuType) {
  const StyledSideMenu = styled('div')(({ theme }) => {
    return {
      height: '100%',

      display: 'flex',
      flexDirection: 'column',
      alignItem: 'flex-start',
      //   padding: '4px 0px 0px',

      position: 'fixed',
      width: `${props?.width}`,
      maxWidth: `calc(100% - 20px)`,
      background: theme.palette.custom.sideBarBg,
      zIndex: '1',
      top: '0',
      right: '0',
      transition: '.5s ease',
      overflowX: 'hidden',

      '.sidemenu_model_header': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '49px',
      },
    };
  });

  return (
    <StyledSideMenu>
      <Box>
        {props.menuComponent === 'report' && (
          <AddReport
            width={props?.width}
            onClose={props.onClose}
            snackBarArgs={props.snackBarArgs}
            setSnackBarArgs={props.setSnackBarArgs}
          />
        )}
        {props.menuComponent === 'filter' && (
          <Filter width={props?.width} onClose={props.onClose} />
        )}
      </Box>
    </StyledSideMenu>
  );
}

export default SideMenu;
