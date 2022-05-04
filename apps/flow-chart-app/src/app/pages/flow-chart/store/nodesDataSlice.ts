import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store';
import { IDataFlowNode } from '../../../../fake-db/db/data-flow-db';

type _IRDataFlowNodeSlice = EntityState<IDataFlowNode>;

export interface IRDataFlowNodeSlice extends _IRDataFlowNodeSlice {
  activeDataFlowNodeId: string;
}

const nodesAdapter = createEntityAdapter<IDataFlowNode>({
  selectId: ({ node_id }) => {
    return node_id;
  },
});

export const {
  selectAll: selectNodes,
  selectById: selectNodesById,
  selectIds: selectNodeByIds,
  selectEntities: selectNodesByIds,
} = nodesAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.nodesDataSlice
);

export const selectactiveDataFlowNodeId = createSelector(
  (state: IRootState) => state.chartDataObj.nodesDataSlice.activeDataFlowNodeId,
  (data) => data
);

const nodesDataSlice = createSlice({
  name: 'nodes-data',
  initialState: nodesAdapter.getInitialState({ activeDataFlowNodeId: null }),
  reducers: {
    setNodes: nodesAdapter.setAll,
  },
});

export const { setNodes } = nodesDataSlice.actions;
export default nodesDataSlice.reducer;
