import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store/index';
import { IFlowchart } from '../../../../fake-db/db/data-flow-db';

type _IRDataFlowSlice = EntityState<IFlowchart>;

export interface IRDataFlowSlice extends _IRDataFlowSlice {
  activeDataFlowId: string;
}

const dataFlowAdapter = createEntityAdapter<IFlowchart>({
  selectId: ({ id }) => id,
});

export const {
  selectAll: selectDataFlows,
  selectById: selectDataFlowById,
  selectIds: selectDataFlowIds,
} = dataFlowAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.dataFlowSlice
);

export const selectactiveDataFlowDataId = createSelector(
  (state: IRootState) => state.chartDataObj.dataFlowSlice.activeDataFlowId,
  (data) => data
);

const dataFlowSlice = createSlice({
  name: 'data-flow',
  initialState: dataFlowAdapter.getInitialState({ activeDataFlowId: null }),
  reducers: {
    setChart: dataFlowAdapter.setAll,
    updateChart: dataFlowAdapter.upsertOne,
    addCharts: dataFlowAdapter.addMany,
  },
});

export const { setChart, updateChart, addCharts } = dataFlowSlice.actions;
export default dataFlowSlice.reducer;
