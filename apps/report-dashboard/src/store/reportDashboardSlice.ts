import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  IReport,
} from "../fake-db/db/report-data-db";
import axios from "axios";

export const getReportsApi = createAsyncThunk(
  "reportData",
  async (params: any, { dispatch }) => {
    const response: any = (
      await axios.get(process.env.NX_DATA_FLOW_BASE_URL + "/reportData")
    ).data.result;

    const data: IReport[] = response.data;
    dispatch(setReports(data));
  }
);

export const postReportApi = createAsyncThunk(
  "reportData",
  async (reportData: any, { dispatch }) => {
  const response =  await axios.post(
      process.env.NX_DATA_FLOW_BASE_URL + "/reportData",
      reportData
    );
    if(response.status===200){
      dispatch(getReportsApi("any"));
      return "success"
    }else{
      return "Error"
    }
  }
);

export const postUpdateQueryApi = createAsyncThunk(
  "updateQuery",
  async (queryData: any, { dispatch }) => {
    await axios.post(
      process.env.NX_DATA_FLOW_BASE_URL + "/updateQuery",
      queryData
    );
    dispatch(getReportsApi("any"));
  }
);

export const postDeleteReportApi = createAsyncThunk(
  "deleteReport",
  async (queryData: any, { dispatch }) => {
    await axios.post(
      process.env.NX_DATA_FLOW_BASE_URL + "/deleteReport",
      queryData
    );
    dispatch(getReportsApi("any"));
  }
);

const reportAdapter = createEntityAdapter<IReport>({
  selectId: ({ title }) => title,
});

export const { selectAll: selectAllReport } = reportAdapter.getSelectors(
  (state: any) => state.reportDashboardSlice
);

const reportDashboardSlice = createSlice({
  name: "report-data",
  initialState: reportAdapter.getInitialState({}),
  reducers: {
    setReports: reportAdapter.setAll,
  },
});

export const { setReports } = reportDashboardSlice.actions;
export default reportDashboardSlice.reducer;
