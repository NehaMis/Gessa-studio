import { Typography, useTheme } from '@mui/material';
import React from 'react';
import Sidebar from '../../comonents/sidebar/Sidebar';

const DataOps = (props: React.Component) => {
  return (
    <div>
      <Typography variant="h1">Data Ops</Typography>
      <Sidebar></Sidebar>
    </div>
  );
};

export default DataOps;
