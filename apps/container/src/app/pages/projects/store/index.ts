import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import projectContentTree from './projectContentTreeSlice';
import projectTabs from './projectTabSlice';
import dialogSlice from '../../../../store/dropdownSlice';
import connectorSlice from './connectorSlice';
import edpDataSlice from './edpDataSlice';

const reducer = combineReducers({
  projects,
  projectContentTree,
  projectTabs,
  dialogSlice,
  connectorSlice,
  edpDataSlice,
});

export default reducer;
