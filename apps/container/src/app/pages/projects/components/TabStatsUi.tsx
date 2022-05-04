import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataFlow from '../../data-flow/DataFlow';
import { IRProjectTab } from '../store/projectTabSlice';

interface TabStatsUiProps {
  tab: IRProjectTab;
}

const TabStatsUi = (props: TabStatsUiProps) => {
  return (
    <div>
      TabStatsUi rendered
      {/* <DataFlow tab={props.tab} /> */}
    </div>
  );
};

export default TabStatsUi;
