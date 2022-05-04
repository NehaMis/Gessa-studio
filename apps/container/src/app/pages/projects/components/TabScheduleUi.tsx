import React, { useEffect } from 'react';
import DataFlow from '../../data-flow/DataFlow';
import { IRProjectTab } from '../store/projectTabSlice';
import { useNavigate } from 'react-router-dom';

interface TabScheduleUiProps {
  tab: IRProjectTab;
}

const TabScheduleUi = (props: TabScheduleUiProps) => {
  return (
    <div>
      TabScheduleUi rendered
      {/* <DataFlow tab={props.tab} /> */}
    </div>
  );
};

export default TabScheduleUi;
