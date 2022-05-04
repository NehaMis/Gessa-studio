import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store/index';
/* import { IFlowchart } from '../../../../fake-db/db/data-flow-db'; */

type _IRschemaDataSlice = EntityState<any>;

export interface IRschemaDataSlice extends _IRschemaDataSlice {
  activeDataFlowId: string;
}

const dataFlowAdapter = createEntityAdapter<any>({
  selectId: ({ id }) => id,
});

export const {
  selectAll: selectDataFlows,
  selectById: selectDataFlowById,
  selectIds: selectDataFlowIds,
} = dataFlowAdapter.getSelectors(
  (state: IRootState) => state.schemaDataObj.schemaDataSlice
);

export const selectactiveDataFlowDataId = createSelector(
  (state: IRootState) => state.schemaDataObj.schemaDataSlice.activeDataFlowId,
  (data) => data
);

const schemaDataSlice = createSlice({
  name: 'schema-data',
  initialState: dataFlowAdapter.getInitialState({ activeDataFlowId: null }),
  reducers: {
    setChart: dataFlowAdapter.setAll,
    updateChart: dataFlowAdapter.upsertOne,
    addCharts: dataFlowAdapter.addMany,
  },
});

export const { setChart, updateChart, addCharts } = schemaDataSlice.actions;
export default schemaDataSlice.reducer;
