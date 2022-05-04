import styled from '@emotion/styled';
import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Transfer, { TransferProps } from '../components/transfer/transfer';

function ColumnOption(props: any) {
  
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
        background: '#191919',
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

        '.columnOption__mainButtonPannel': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',

          '.columnOption__saveButtonGp': {
            display:'flex',
            justifyContent: 'space-between',
            gap:'20px',
          },
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
          <Transfer {...transferArgs} />
        </Box>

        <Box className="columnOption__mainButtonPannel">
          <Box>
            <Button
              className="btn_cancel"
              variant="outlined"
              color="info"
              onClick={props.onClose}
            >
              Cancel
            </Button>
          </Box>

          <Box className="columnOption__saveButtonGp">
            <Button
              className="btn_cancel"
              variant="outlined"
              color="info"
              // onClick={props.onClose}
            >
              Restore Default
            </Button>

            <Button
              className="btn_save"
              variant="contained"
              color="info"
              // onClick={() => handleSave()}
              // disabled={isDataFilled ? false : true}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </StyledColumnMenu>
  );
}

export default ColumnOption;
