import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import AddReport from '../pages/AddReport';
// import Filter from '../pages/Filter';

export interface SideMenuType {
  width: string;
  snackbarShow: () => void;
  shackbarClose: () => void;
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
      background: '#191919',
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
            snackbarShow={props.snackbarShow}
            shackbarClose={props.shackbarClose}
          />
        )}
        {/* {props.menuComponent === 'filter' && (
          <Filter width={props?.width} onClose={props.onClose} />
        )} */}
      </Box>
    </StyledSideMenu>
  );
}

export default SideMenu;
