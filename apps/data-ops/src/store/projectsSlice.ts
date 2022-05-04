import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { IRootState } from '.';

export interface IProject {
  id: string;
  name: string;
}

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async (_, { dispatch }) => {
    const response = await axios.get('projects');
    const data: Array<IProject> = response.data;
    dispatch(setProjects(data));
  }
);

const projectAdapter = createEntityAdapter<IProject>({
  selectId: ({ id }) => id,
});

export const { selectAll: selectProjects, selectById: selectProjectById } =
  projectAdapter.getSelectors((state: IRootState) => state.projects);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectAdapter.getInitialState(),
  reducers: {
    addProject: projectAdapter.addOne,
    setProjects: projectAdapter.setAll,
    addProjects: projectAdapter.addMany,
  },
});

export const { addProject, setProjects, addProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
