import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
    createSelector,
    EntityState,
} from '@reduxjs/toolkit';

import { IReport, IReportData, IReportDetails, IReportIcon } from '../fake-db/db/report-data-db'
import axios from 'axios';

export const getReportsApi = createAsyncThunk(
    'reportData',
    async (params: any, { dispatch }) => {
        const response: any = (
            await axios.get(process.env.NX_DATA_FLOW_BASE_URL + "/reportData")
        ).data.result;

        const data: IReport[] = response.data;
        dispatch(setReports(data));
    }
)

const reportAdapter=createEntityAdapter<IReport>({
    selectId: ({title})=>title,
})

export const{
    selectAll: selectAllReport,
}=reportAdapter.getSelectors((state:any)=>state.reportDashboardSlice)

const reportDashboardSlice=createSlice({
    name:'report-data',
    initialState: reportAdapter.getInitialState({}),
    reducers:{
        setReports:reportAdapter.setAll,
    },
})

export const {setReports}= reportDashboardSlice.actions;
export default reportDashboardSlice.reducer;
