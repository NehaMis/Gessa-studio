import React from 'react';
import DataFlow from '../../data-flow/DataFlow';
import { IRProjectTab } from '../store/projectTabSlice';
import selectImage from '../assets/chooseConnector.svg';
import { Typography } from '@mui/material';

interface TabDefaultUiProps {
  tab: IRProjectTab;
}

const TabDefaultUi = (props: TabDefaultUiProps) => {
  return (
    <div className="">
      <img src={selectImage} alt="choose connector" className=" mb-2"></img>
      <Typography>Choose connector to view details</Typography>
      {/* <DataFlow tab={props.tab} /> */}
    </div>
  );
};

export default TabDefaultUi;
