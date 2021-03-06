import { styled } from '@mui/system';
import { IconButton, Icon, Box, Divider, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Snackbar, { SnackbarProps } from './Snackbar/snackbar';
import ColumnOption from '../pages/ColumnOption';
import Table from './Table/Table';

function Dashboard() {
  const StyledDashboard = styled('div')(({ theme }) => {
    return {
      '.dashboard_model_header': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 16px',
        height: '49px',
      },
      '.dashboard_report_heading': {
        position: 'relative',
        fontWeight: '700',
        fontSize: '14px',
        fontHeight: '20px',
      },
      '.dashboard_button_pannel': {
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'flex-start',
        padding: '0px',
      },
      '.dashboard_buttons': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '36px',
        height: '36px',
        margin: '0px 10px',
        padding: '16px',
        background: '#272727',
        borderRadius: '4px',
      },
    };
  });

  const handleSnackbarClose = () => {
    setSnackBarArgs({
      ...snackBarArgs,
      open: false,
    });
  };

  const [snackBarArgs, setSnackBarArgs] = useState<SnackbarProps>({
    open: false,
    autoHideDuraton: 6000,
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
    message: 'The Report Added Successfully',
    onCloseFunc: handleSnackbarClose,
    actions: [
      {
        name: 'close_black_24dp',
        size: 25,
        label: 'close',
        style: 'regular',
        handleClick: handleSnackbarClose,
      },
    ],
  });

  const [width, setWidth] = useState('0');
  const [component, setComponent] = useState('');
  const [isColumnOptionOpen, setIsColumnOptionOpen] = useState(false);

  // Table
  const columnHeader = ['Name', 'Created By', 'Created On'];

  const handleShowAddReport = () => {
    setWidth('574px');
    setComponent('report');
  };

  const handleHideAddReport = () => {
    setWidth('0px');
  };

  const handleShowFilter = () => {
    setWidth('360px');
    setComponent('filter');
  };

  const handleShowSnackbar = () => {
    setSnackBarArgs({
      ...snackBarArgs,
      open: true,
    });
  };

  const handleToggleColumnOption = () => {
    setIsColumnOptionOpen(!isColumnOptionOpen);
  };

  return (
    <>
      <StyledDashboard>
        <Box className="dashboard_model_header">
          <Box className="dashboard_report_heading">
            <Typography className="dashboard_report_heading" variant="body2">
              Reports
            </Typography>
          </Box>
          <Box className="dashboard_button_pannel">
            <Box
              className="dashboard_buttons"
              onClick={() => handleShowAddReport()}
            >
              <Add />
            </Box>
            {/* <Box className="dashboard_buttons" onClick={()=>handleShowFilter()}>
              <FilterAltOutlinedIcon />
            </Box> */}
            <Box
              className="dashboard_buttons"
              onClick={() => handleToggleColumnOption()}
            >
              <TuneOutlinedIcon />
            </Box>
          </Box>
        </Box>

        {/* <Divider /> */}
        <Box>
          <Table />
        </Box>
      </StyledDashboard>
      <SideMenu
        menuComponent={component}
        width={width}
        onClose={handleHideAddReport}
        snackbarShow={handleShowSnackbar}
        shackbarClose={handleSnackbarClose}
      />
      {isColumnOptionOpen && (
        <ColumnOption onClose={handleToggleColumnOption} />
      )}
      <Snackbar {...snackBarArgs} />
    </>
  );
}

export default Dashboard;
