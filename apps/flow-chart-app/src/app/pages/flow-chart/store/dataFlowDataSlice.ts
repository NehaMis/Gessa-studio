import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import {
  IChartData,
  IDataFlowGetApi,
  IFlowchart,
} from '../../../../fake-db/db/data-flow-db';
import { setChart } from './dataFlowSlice';
import { setNodes } from './nodesDataSlice';
import axios from 'axios';
import { IRootState } from 'apps/flow-chart-app/src/store';

type _IRDataFlowDataSlice = EntityState<IChartData>;

export interface IRDataFlowDataSlice extends _IRDataFlowDataSlice {
  activeDataFlowDataId: string;
}

const makeSerilizeObject = (data: any, nodes: any) => {
  const obj: IFlowchart[] = [];
  if (data && data.length) {
    for (let i = 0; i < data.length; i += 1) {
      const payload: IFlowchart = {
        id: data[i].id,
        type: data[i].type ? data[i].type : 'custom',
        connector_id: '',
      };
      if (
        payload.type.toLowerCase() === 'input' ||
        payload.type.toLowerCase() === 'output' ||
        payload.type.toLowerCase() === 'transform'
      ) {
        if (data[i].position) {
          payload.position = data[i].position;
          payload.connector_id = data[i].connector_id;
        }
      }
      if (data[i].data) {
        payload.data = data[i].data;
      }
      if (data[i].source) {
        payload.source = data[i].source;
      }
      if (data[i].target) {
        payload.target = data[i].target;
      }
      if (data[i].animated) {
        payload.animated = data[i].animated;
      }
      if (data[i].data) {
        const index = nodes.findIndex(
          (value: any) =>
            value.name === data[i].data.props.text &&
            data[i].data.props.text !== ''
        );
        if (index !== -1) {
          payload.id = nodes[index].node_id;
        }
      }
      obj.push(payload);
    }
  }
  return obj;
};

export const getFlowChartData = createAsyncThunk(
  'data-flow',
  async (params: IDataFlowGetApi, { dispatch }) => {
    const response: any = (
      await axios.get(process.env.NX_DATA_FLOW_BASE_URL + `/data-flow`, {
        params: params,
      })
    ).data.result;
    const data: IChartData[] = response.data;
    dispatch(setDataFlowObject(data[0]));

    const chartData: IFlowchart[] = makeSerilizeObject(
      data[0].flowchart,
      data[0].nodes
    );
    const nodesData = data[0].nodes;
    dispatch(setChart(chartData));
    dispatch(setNodes(nodesData));
  }
);

export const updateFlowChart = createAsyncThunk(
  'data-flow',
  async (nodeContent: any, { dispatch }) => {
    const data: any = await axios.patch(
      process.env.NX_DATA_FLOW_BASE_URL + `/data-flow/` + nodeContent.id,
      nodeContent.data
    );
    // dispatch(setNodes(data[0].nodes));
    // dispatch(setChart(data[0].flowchart));
  }
);

export const inputStoreData = createAsyncThunk(
  'edp-input-store-data',
  async (nodeContent: any, { dispatch }) => {
    const data: any = await axios.post(
      `http://3.134.193.236:8080/edp/input/store_data`,
      {
        pipelineId: 'atasaujksajas',
        inputId: 'ip001',
        inputType: 'MySQL',
        inputDfName: 'Demo',
        inputDfId: 'p0101',
        endpointDetails: {
          endpointType: 'MySQL',
          properties: [
            {
              key: 'jdbcUrl',
              value: 'jdbc:mysql://3.134.193.236:3306',
            },
            {
              key: 'user',
              value: 'chaminda',
            },
            {
              key: 'password',
              value: 'password',
            },
            {
              key: 'driver',
              value: 'com.mysql.cj.jdbc.Driver',
            },
          ],
        },
        inputProperties: [
          {
            key: 'database',
            value: 'dataeaze',
          },
          {
            key: 'table',
            value: 'country',
          },
        ],
      }
    );
  }
);
export const edpDataframeGetData = createAsyncThunk(
  'edp-dataframe-get_data',
  async (nodeContent: any, { dispatch }) => {
    const data: any = await axios.post(
      `http://3.134.193.236:8080/edp/dataframe/get_data`,
      {
        pipelineId: '101',
        dataframes: 'country',
      }
    );
  }
);

const dataFlowDataAdapter = createEntityAdapter<IChartData>({
  selectId: ({ pipeline_id }) => pipeline_id,
});

export const {
  selectAll: selectDataFlowData,
  selectById: selectDataFlowDataById,
  selectIds: selectDataFlowDataByIds,
} = dataFlowDataAdapter.getSelectors((state: IRootState) => {
  return state.chartDataObj.dataFlowDataSlice;
});

export const selectactiveDataFlowDataId = createSelector(
  (state: IRootState) =>
    state.chartDataObj.dataFlowDataSlice.activeDataFlowDataId,
  (data) => data
);

const dataFlowDataSlice = createSlice({
  name: 'data-flow-data',
  initialState: dataFlowDataAdapter.getInitialState({
    activeDataFlowDataId: null,
  }),
  reducers: {
    setDataFlowObject: dataFlowDataAdapter.upsertOne,
  },
});

export const { setDataFlowObject } = dataFlowDataSlice.actions;
export default dataFlowDataSlice.reducer;
