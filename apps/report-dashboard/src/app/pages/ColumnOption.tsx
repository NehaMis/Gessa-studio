import styled from '@emotion/styled';
import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Transfer, {TransferProps} from '../components/TransferComponent/Transfer';
import { useTheme } from '@mui/system';

function ColumnOption(props: any) {

  const themes = useTheme();
  const StyledColumnMenu = useCallback(
    styled('div')(({ theme }) => {
      return {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        // right: '0px',
        // bottom: '0px',
        zIndex: '99',
        background: themes.palette.custom.sideBarBg,
        // paddingLeft:'100px',
        // paddingRight:'100px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: '706px',
        height: '631px',
        
        '.popup-inner': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '0px 16px',
          height: '48px',
          top: '4px',

          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '20px',

          width: '100%',
        },

        '.columnOption__instruction': {
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          position: 'relative',
          left: '7px',
          margin: '16px',
        },
      };
    }),
    []
  );

  const transferArgs: TransferProps = {
    leftList: [{ label: 'displayerror', value: 'Type' }],
    rightList: [
      { label: 'displayerror4', value: 'Name' },
      { label: 'displayerror5', value: 'Created By' },
      { label: 'displayerror6', value: 'Created On' },
    ],
    leftListLabel: 'Available Fields',
    rightListLabel: 'Selected Fields',
  };

  return (
    <StyledColumnMenu>
      <Box className="popup-inner">
        <Typography className="popup-inner">Column Option</Typography>
        <Box onClick={props.onClose}>
          <CloseIcon />
        </Box>
      </Box>
      <Divider />

      <Box className="columnOption__instruction">
        <Typography>
          Add or remove column. To change the column order, drag and drop a
          field.
        </Typography>

        <Box>
          <Transfer onClose={props.onClose} {...transferArgs} />
        </Box>
      </Box>
    </StyledColumnMenu>
  );
}

export default ColumnOption;
