import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataFlow from '../../data-flow/DataFlow';
import { IRProjectTab } from '../store/projectTabSlice';

interface TabDefinitionUiProps {
  tab: IRProjectTab;
}

const TabDefinitionUi = (props: TabDefinitionUiProps) => {
  return (
    <div
      className="h-full overflow-y-auto overflow-x-hidden p-0"
      style={{ height: 'calc(100vh - 70px)' }}
    >
      <DataFlow tab={props.tab} />
    </div>
  );
};

export default TabDefinitionUi;
