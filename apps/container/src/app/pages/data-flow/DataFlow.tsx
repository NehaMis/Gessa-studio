import { Typography } from '@mui/material';
import React from 'react';
import { IRProjectTab } from '../projects/store/projectTabSlice';
import DataFlowUi from './components/DataFlowUi';

const DataFlow = ({ tab }: { tab: IRProjectTab }) => {
  return <DataFlowUi tab={tab} />;
};

export default DataFlow;
