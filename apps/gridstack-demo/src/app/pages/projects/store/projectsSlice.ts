import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store';
import axios from 'axios';

export interface IRProject {
  _id: string;
  name: string;
  project_key: string;
}

const projectAdapter = createEntityAdapter<IRProject>({
  selectId: ({ _id }) => _id,
});

export const { selectAll: selectProjects } = projectAdapter.getSelectors(
  (state: any) => {
    return state.gridStore;
  }
);

export const selectActiveProjectId = createSelector(
  (state: IRootState) => state.gridStore,
  (data) => data
);

const projectsSlice = createSlice({
  name: 'gridStore',
  initialState: projectAdapter.getInitialState({
    id: null,
  }),
  reducers: {
    setProjects: projectAdapter.setAll,
  },
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
