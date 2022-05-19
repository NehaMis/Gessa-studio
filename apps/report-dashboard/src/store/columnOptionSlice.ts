import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
    createSelector,
    EntityState,
} from '@reduxjs/toolkit';

import {TransferProps, TransferHeaders } from '../fake-db/db/column-options-data-db'
import axios from 'axios';

export const getColumnApi = createAsyncThunk(
    'getColumnOption',
    async (params: any, { dispatch }) => {
        const response: any = (
            await axios.get(process.env.NX_DATA_FLOW_BASE_URL + "/columnOption")
        );
        const data: any = response?.data?.result;
        dispatch(setColumns(data));
    }
)

export const postColumnHeaderApi=createAsyncThunk(
    'postColumnOption',
    async (columnData: any, { dispatch }) => {
        const response:any=(
            await axios.post(process.env.NX_DATA_FLOW_BASE_URL + "/columnOption", columnData)
        )

        dispatch(getColumnApi("any"))
    }
)

const columnOptionAdapter = createEntityAdapter<TransferHeaders>()

export const {
    selectAll: selectAllReport,
} = columnOptionAdapter.getSelectors((state: any) => state.columnOptionSlice)

const columnOptionSlice = createSlice({
    name: 'column-headers',
    initialState: columnOptionAdapter.getInitialState({}),
    reducers: {
        setColumns: columnOptionAdapter.setAll,
    },
})

export const { setColumns } = columnOptionSlice.actions;
export default columnOptionSlice.reducer;
