import { combineReducers } from '@reduxjs/toolkit';
import gridStore from './projectsSlice';

const reducer = combineReducers({
  gridStore,
});

export default reducer;
