import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import {
  IConnectorData,
  IConnectorGetApi,
} from '../../../../fake-db/db/connector-db';
import axios from 'axios';
import { IRootState } from 'apps/flow-chart-app/src/store';
import { IDataFlowNode } from 'apps/flow-chart-app/src/fake-db/db/data-flow-db';

export interface IProjectContentTreeItem {
  _id: string;
  name: string;
  type: string;
  category: string;
  icon: string;
  project_id: string;
  project_content_id: string;
  child_allowed: number;
  is_delete: number;
  children: IProjectContentTreeItem[];
  created_at: string;
  updated_at: string;
  __v?: number;
}

export interface IProjectContentTreeDB {
  data: IProjectContentTreeItem[];
  count: number;
}
export interface IRProjectContentTreeItem {
  _id: string;
  name: string;
  project_id: string;
  project_content_id: string;
  type: string;
  nodeName?: string;
  nodeId?: string;
  children: IRProjectContentTreeItem[];
  isContentTree?: boolean;
  TransitionComponent?: any;

  [x: string]: any;
}

type _IRConnectorTypesSlice = EntityState<IProjectContentTreeItem>;

export interface IRConnectorTypesSlice extends _IRConnectorTypesSlice {
  activeConnectorTypeId: string;
}

export const getProjectContentTreeApi = createAsyncThunk(
  'projects-content-tree',
  async (params: { project_id: string }, { dispatch }) => {
    const response: IProjectContentTreeDB = (
      await axios.get(process.env.NX_BASE_URL + `/project-content-tree`, {
        params: {
          page: 0,
          size: 10,
          filters: `{ "project_id": "${params.project_id}" }`,
        },
      })
    ).data.result;
    const data: IProjectContentTreeItem[] = response.data;
    dispatch(setProjectContentTree(data));
  }
);
const connectorTypesAdapter = createEntityAdapter<IProjectContentTreeItem>({
  selectId: ({ _id }) => _id,
});

export const {
  selectAll: selectProjectContentTree,
  selectById: selectProjectContentById,
  selectIds: selectProjectContentIds,
} = connectorTypesAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.connectorTypesSlice
);

export const selectactiveConnectorTypeId = createSelector(
  (state: IRootState) =>
    state.chartDataObj.connectorTypesSlice.activeConnectorTypeId,
  (data) => data
);

const connectorTypesSlice = createSlice({
  name: 'connector-types',
  initialState: connectorTypesAdapter.getInitialState({
    activeConnectorTypeId: null,
  }),
  reducers: {
    setProjectContentTree: connectorTypesAdapter.setAll,
    setConnectors: connectorTypesAdapter.setAll,
  },
});

export const { setConnectors, setProjectContentTree } =
  connectorTypesSlice.actions;
export default connectorTypesSlice.reducer;
