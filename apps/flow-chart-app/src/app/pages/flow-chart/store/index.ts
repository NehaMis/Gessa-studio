import { combineReducers } from '@reduxjs/toolkit';
import dataFlowSlice from './dataFlowSlice';
import connectorSlice from './connectorSlice';
import dataFlowDataSlice from './dataFlowDataSlice';
import nodesDataSlice from './nodesDataSlice';
import connectorTypesSlice from './connectorTypesSlice';
import tabDraftSlice from './tabDraftSlice';
import projectConnectorTypesSlice from './projectConnector';
import edpDataSlice from './edpDataSlice';
import edpDataFrameSlice from './edpDataFrameSlice';

const reducer = combineReducers({
  dataFlowSlice,
  connectorSlice,
  dataFlowDataSlice,
  nodesDataSlice,
  connectorTypesSlice,
  tabDraftSlice,
  projectConnectorTypesSlice,
  edpDataSlice,
  edpDataFrameSlice,
});

export default reducer;
