import { combineReducers } from '@reduxjs/toolkit';
import reportDashboardSlice from './reportDashboardSlice';
import columnOptionSlice from './columnOptionSlice';

const reducer=combineReducers({
    reportDashboardSlice,
    columnOptionSlice
})

export default reducer;