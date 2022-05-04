import { configureStore, combineReducers } from '@reduxjs/toolkit';
import axios from 'axios';
import chartDataObj from '../app/pages/flow-chart/store';
import { IRConnectorSlice } from '../app/pages/flow-chart/store/connectorSlice';
import { IRConnectorTypesSlice } from '../app/pages/flow-chart/store/connectorTypesSlice';
import { IRDataFlowDataSlice } from '../app/pages/flow-chart/store/dataFlowDataSlice';
import { IRDataFlowSlice } from '../app/pages/flow-chart/store/dataFlowSlice';
import { IRedpDataFrameSlice } from '../app/pages/flow-chart/store/edpDataFrameSlice';
import { IRedpDataSlice } from '../app/pages/flow-chart/store/edpDataSlice';
import { IRDataFlowNodeSlice } from '../app/pages/flow-chart/store/nodesDataSlice';
import { IRprojectConnectorTypesSlice } from '../app/pages/flow-chart/store/projectConnector';
import {
  IRTabDraftSlice,
  ITabDraftSlice,
} from '../app/pages/flow-chart/store/tabDraftSlice';
// import { IConnectorData } from '../fake-db/db/connector-db';
// import {
//   IChartData,
//   IDataFlowNode,
//   IFlowchart,
// } from '../fake-db/db/data-flow-db';

export { default as chartDataObj } from '../app/pages/flow-chart/store';

export interface IRootState {
  chartDataObj: {
    dataFlowSlice: IRDataFlowSlice;
    connectorSlice: IRConnectorSlice;
    dataFlowDataSlice: IRDataFlowDataSlice;
    nodesDataSlice: IRDataFlowNodeSlice;
    connectorTypesSlice: IRConnectorTypesSlice;
    tabDraftSlice: IRTabDraftSlice;
    projectConnectorTypesSlice: IRprojectConnectorTypesSlice;
    edpDataSlice: IRedpDataSlice;
    edpDataFrameSlice: IRedpDataFrameSlice;
  };
}
const reducers = {
  chartDataObj,
};

export default reducers;
