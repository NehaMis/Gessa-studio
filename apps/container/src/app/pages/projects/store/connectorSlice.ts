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
} from '../../../../fake-db/db/project-connector-db';
import axios from 'axios';
import { IRootState } from 'apps/container/src/store';

export const getConnectorsApi = createAsyncThunk(
  'connector',
  async (params: IConnectorGetApi, { dispatch }) => {
    // debugger;
    // try {
    const response: any = (
      await axios.get(process.env.NX_CONNECTOR_BASE_URL + `/connector`, {
        params: params,
      })
    ).data.result;
    // } catch (err) {
    //   console.log('Error', err);
    // }

    const data: IConnectorData[] = response.data;
    const dataForStore: IConnectorData[] = data.map((e: IConnectorData) => {
      return {
        _id: e._id,
        name: e.name,
        description: e.description,
        tags: e.tags,
        icon: e.icon,
        properties: e.properties,
        status: e.status,
        is_delete: e.is_delete,
        created_at: e.created_at,
        updated_at: e.updated_at,
        __v: e.__v,
      };
    });
    dispatch(setConnectors(dataForStore));
  }
);

export const selectActiveProjectTabId = createSelector(
  (state: IRootState) => state.project.connectorSlice,
  (data) => data
);

const connectorAdapter = createEntityAdapter<IConnectorData>({
  selectId: ({ _id }) => _id,
});

export const {
  selectAll: selectAllConnectors,
  selectById: selectConnectorById,
  selectIds: selectConnectorIds,
} = connectorAdapter.getSelectors((state: any) => state.project.connectorSlice);

const connectorSlice = createSlice({
  name: 'connector-data',
  initialState: connectorAdapter.getInitialState({}),
  reducers: {
    setConnectors: connectorAdapter.setAll,
  },
});

export const { setConnectors } = connectorSlice.actions;
export default connectorSlice.reducer;
