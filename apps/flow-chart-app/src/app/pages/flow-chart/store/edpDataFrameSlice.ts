import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store/index';
// import { IFlowchart } from '../../../../fake-db/db/data-flow-db';
import axios from 'axios';

type _IRedpDataFrameSlice = EntityState<any>;

// export const updateTestConnection = createAsyncThunk(
//   'test-connection',
//   async (nodeContent: any, { dispatch }) => {
//     const data: any = await axios.post(
//       `http://3.134.193.236:8081/edp/endpoint/validate`,
//       {
//         pipelineId: nodeContent.pipelineId,
//         endpointId: nodeContent.endpointId,
//         endpointName: nodeContent.endpointName,
//         endpointType: nodeContent.endpointType,
//         details: nodeContent.details,
//       }
//     );
//     console.log(data);
//     dispatch(setEDPDataFrames(data.Data));

//     // dispatch(setNodes(data[0].nodes));
//     // dispatch(setChart(data[0].flowchart));
//   }
// );

// export const validateSqlQuery = createAsyncThunk(
//   'test-connection',
//   async (nodeContent: any, { dispatch }) => {
//     const data: any = await axios.post(
//       `http://3.134.193.236:8081/edp/transform/execute`,
//       {
//         pipelineId: nodeContent.pipelineId,
//         transformId: nodeContent.transformId,
//         outputDFName: nodeContent.outputDFName,
//         inputDFList: nodeContent.inputDFList,
//         transformQuery: nodeContent.transformQuery,
//       }
//     );
//     console.log(data);
//     dispatch(setEDPDataFrames(data.Data));

//     // dispatch(setNodes(data[0].nodes));
//     // dispatch(setChart(data[0].flowchart));
//   }
// );
export const getDataFrameListApi = createAsyncThunk(
  'test-connection',
  async (nodeContent: any, { dispatch }) => {
    const data: any = await axios.post(
      `http://3.134.193.236:8081/edp/dataframe/get_data`,
      {
        pipelineId: nodeContent.pipelineId,
        dataframes: nodeContent.dataframes,
      }
    );
    console.log(data);
    // for (let i = 0; i < data.data.data_frames.length; i += 1) {
    dispatch(addEDPDataFrame(data.data.data_frames));
    // }
    // dispatch(setEDPData(data.data_frames));

    // dispatch(setNodes(data[0].nodes));
    // dispatch(setChart(data[0].flowchart));
  }
);

export interface IRedpDataFrameSlice extends _IRedpDataFrameSlice {
  activeDataFlowId: string;
}

const dataFrameAdapter = createEntityAdapter<any>({
  selectId: ({ id }) => id,
});

export const {
  selectAll: selectEDPDataFrames,
  selectById: selectEDPDataFramesById,
  selectIds: selectEDPDataFramesByIds,
} = dataFrameAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.edpDataFrameSlice
);

export const selectactiveDataFlowDataId = createSelector(
  (state: IRootState) => state.chartDataObj.edpDataFrameSlice.activeDataFlowId,
  (data) => data
);

const edpDataFrameSlice = createSlice({
  name: 'edp-dataframe',
  initialState: dataFrameAdapter.getInitialState({
    activeDataFlowId: null,
  }),
  reducers: {
    setEDPDataFrames: dataFrameAdapter.setAll,
    updateEDPDataFrames: dataFrameAdapter.upsertOne,
    addEDPDataFrame: dataFrameAdapter.addMany,
  },
});

export const { setEDPDataFrames, updateEDPDataFrames, addEDPDataFrame } =
  edpDataFrameSlice.actions;
export default edpDataFrameSlice.reducer;
