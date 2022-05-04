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
import { IProperty } from 'apps/flow-chart-app/src/fake-db/db/data-flow-node-db';

export interface IProjectConnectorItem {
  _id: string;
  name: string;
  connector_id: string;
  project_id: string;
  meta_connector_id: string;
  properties: Array<IProperty>;
  is_delete: number;
  created_at: string;
  updated_at: string;
  __v?: number;

  //   type: string;
  //   category: string;
  //   icon: string;
  //   project_content_id: string;
  //   child_allowed: number;
  //   children: IProjectConnectorItem[];
}

export interface IProjectContentTreeDB {
  data: IProjectConnectorItem[];
  count: number;
}
export interface IRProjectConnectorItem {
  _id: string;
  name: string;
  connector_id: string;
  project_id: string;
  meta_connector_id: string;
  properties: Array<IProperty>;
  is_delete: number;
  created_at: string;
  updated_at: string;
  __v?: number;
  //   _id: string;
  //   name: string;
  //   project_id: string;
  //   project_content_id: string;
  //   type: string;
  //   nodeName?: string;
  //   nodeId?: string;
  //   children: IRProjectConnectorItem[];
  //   isContentTree?: boolean;
  //   TransitionComponent?: any;

  //   [x: string]: any;
}

type _IRprojectConnectorTypesSlice = EntityState<IProjectConnectorItem>;

export interface IRprojectConnectorTypesSlice
  extends _IRprojectConnectorTypesSlice {
  activeProjectConnectorTypeId: string;
}

export const getProjectConnectorsApi = createAsyncThunk(
  'project-connector',
  async (params: { project_id: string }, { dispatch }) => {
    const response: IProjectContentTreeDB = (
      await axios.get(
        process.env.NX_CONNECTOR_BASE_URL + `/project-connectors`,
        {
          params: {
            page: 0,
            size: 10,
            filters: `{ "project_id": "${params.project_id}" }`,
          },
        }
      )
    ).data.result;
    const data: IProjectConnectorItem[] = response.data;
    dispatch(setProjectConnector(data));
  }
);
const connectorTypesAdapter = createEntityAdapter<IProjectConnectorItem>({
  selectId: ({ _id }) => _id,
});

export const {
  selectAll: selectProjectConnectors,
  selectById: selectProjectConnectorById,
  selectIds: selectProjectConnectorIds,
} = connectorTypesAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.projectConnectorTypesSlice
);

export const selectactiveProjectConnectorTypeId = createSelector(
  (state: IRootState) =>
    state.chartDataObj.projectConnectorTypesSlice.activeProjectConnectorTypeId,
  (data) => data
);

const projectConnectorTypesSlice = createSlice({
  name: 'connector-types',
  initialState: connectorTypesAdapter.getInitialState({
    activeProjectConnectorTypeId: null,
  }),
  reducers: {
    setProjectConnector: connectorTypesAdapter.setAll,
    setConnectors: connectorTypesAdapter.setAll,
  },
});

export const { setConnectors, setProjectConnector } =
  projectConnectorTypesSlice.actions;
export default projectConnectorTypesSlice.reducer;
