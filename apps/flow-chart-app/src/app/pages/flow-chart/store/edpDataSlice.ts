import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store/index';
import { IFlowchart } from '../../../../fake-db/db/data-flow-db';
import axios from 'axios';

type _IRedpDataSlice = EntityState<IFlowchart>;

export const updateTestConnection = createAsyncThunk(
  'test-connection',
  async (nodeContent: any, { dispatch }) => {
    const data: any = await axios.post(
      `http://3.134.193.236:8081/edp/endpoint/validate`,
      {
        pipelineId: nodeContent.pipelineId,
        endpointId: nodeContent.endpointId,
        endpointName: nodeContent.endpointName,
        endpointType: nodeContent.endpointType,
        details: nodeContent.details,
      }
    );
    console.log(data);
    dispatch(setEDPData(data.Data));

    // dispatch(setNodes(data[0].nodes));
    // dispatch(setChart(data[0].flowchart));
  }
);

export const validateSqlQuery = createAsyncThunk(
  'test-connection',
  async (nodeContent: any, { dispatch }) => {
    const data: any = await axios.post(
      `http://3.134.193.236:8081/edp/transform/execute`,
      {
        pipelineId: nodeContent.pipelineId,
        transformId: nodeContent.transformId,
        outputDFName: nodeContent.outputDFName,
        inputDFList: nodeContent.inputDFList,
        transformQuery: nodeContent.transformQuery,
      }
    );
    console.log(data);
    dispatch(setEDPData(data.Data));

    // dispatch(setNodes(data[0].nodes));
    // dispatch(setChart(data[0].flowchart));
  }
);
// export const getDataFrameListApi = createAsyncThunk(
//   'test-connection',
//   async (nodeContent: any, { dispatch }) => {
//     const data: any = await axios.post(
//       `http://3.134.193.236:8081/edp/dataframe/get_data`,
//       {
//         pipelineId: nodeContent.pipelineId,
//         dataframes: nodeContent.dataframes,
//       }
//     );
//     console.log(data);
//     for (let i = 0; i < data.data_frames.length; i += 1) {
//       dispatch(addEDPData(data[i].data_frames));
//     }
//     // dispatch(setEDPData(data.data_frames));

//     // dispatch(setNodes(data[0].nodes));
//     // dispatch(setChart(data[0].flowchart));
//   }
// );

export interface IRedpDataSlice extends _IRedpDataSlice {
  activeDataFlowId: string;
}

const dataFlowAdapter = createEntityAdapter<IFlowchart>({
  selectId: ({ id }) => id,
});

export const {
  selectAll: selectEDPs,
  selectById: selectEDPDataById,
  selectIds: selectEDPDataByIds,
} = dataFlowAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.edpDataSlice
);

export const selectactiveDataFlowDataId = createSelector(
  (state: IRootState) => state.chartDataObj.edpDataSlice.activeDataFlowId,
  (data) => data
);

const edpDataSlice = createSlice({
  name: 'edp-data',
  initialState: dataFlowAdapter.getInitialState({
    tableData: null,
    activeDataFlowId: null,
  }),
  reducers: {
    setEDPData: dataFlowAdapter.setAll,
    updateEDPData: dataFlowAdapter.upsertOne,
    addEDPData: dataFlowAdapter.addMany,
  },
});

export const { setEDPData, updateEDPData, addEDPData } = edpDataSlice.actions;
export default edpDataSlice.reducer;
