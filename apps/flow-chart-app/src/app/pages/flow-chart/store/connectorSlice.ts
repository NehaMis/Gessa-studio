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

type _IRConnectorSlice = EntityState<IConnectorData>;

export interface IRConnectorSlice extends _IRConnectorSlice {
  activeConnectorId: string;
}

export const getConnectors = createAsyncThunk(
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

const connectorAdapter = createEntityAdapter<IConnectorData>({
  selectId: ({ _id }) => _id,
});

export const {
  selectAll: selectAllConnectors,
  selectById: selectConnectorById,
  selectIds: selectConnectorIds,
} = connectorAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.connectorSlice
);

export const selectActiveProjectContentId = createSelector(
  (state: IRootState) => state.chartDataObj.connectorSlice.activeConnectorId,
  (data) => data
);

const connectorSlice = createSlice({
  name: 'connector-data',
  initialState: connectorAdapter.getInitialState({
    activeConnectorId: null,
  }),
  reducers: {
    setConnectors: connectorAdapter.setAll,
  },
});

export const { setConnectors } = connectorSlice.actions;
export default connectorSlice.reducer;
