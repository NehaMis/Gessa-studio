import { combineReducers } from '@reduxjs/toolkit';
import schemaDataSlice from './schemaDataSlice';

const reducer = combineReducers({
  schemaDataSlice,
});

export default reducer;
