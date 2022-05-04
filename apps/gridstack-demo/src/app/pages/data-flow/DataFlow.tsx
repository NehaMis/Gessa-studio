import { Typography } from '@mui/material';
import React from 'react';
import DataFlowUi from './components/DataFlowUi';

const DataFlow = ({ tab }: { tab: any }) => {
  return <DataFlowUi tab={tab} />;
};

export default DataFlow;
