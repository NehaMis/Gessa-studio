import { Typography } from '@mui/material';
import { Microfrontend } from '../../../../micro-frontend';
import MFFlowChartApp from '../../../../micro-frontend/remotes/flow-chart-app';
import React, { memo } from 'react';
interface Props {
  tab: any;
}

const DataFlowUi = ({ tab }: Props) => {
  return (
    <div className="">
      <Microfrontend
        url={MFFlowChartApp.url}
        scope={MFFlowChartApp.scope}
        module={MFFlowChartApp.components.FlowChart}
        props={{
          project_id: tab.project_id,
          project_content_id: tab.id,
        }}
      />
    </div>
  );
};

export default memo(DataFlowUi);
