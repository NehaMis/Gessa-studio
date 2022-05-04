import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store';
import { IProject, IProjectsDB } from '../../../../fake-db/db/projects-db';
import axios from 'axios';

type _IRProjects = EntityState<IRProject>;
export interface IRProjects extends _IRProjects {
  activeProjectId: string;
}

export interface IRProject {
  _id: string;
  name: string;
  project_key: string;
}
// export const updateTestConnection = createAsyncThunk(
//   'test-connection',
//   async (nodeContent: any, { dispatch }) => {
//     const data: any = await axios.post(
//       `http://3.134.193.236:8081/edp/dataframe/get_data`,
//       {
//         pipelineId: '101',
//         dataframes: 'Demo,dmo',
//       }
//     );
//     console.log(data);

//     // dispatch(setNodes(data[0].nodes));
//     // dispatch(setChart(data[0].flowchart));
//   }
// );

export const getProjectsApi = createAsyncThunk(
  'projects',
  async (params: IAuth, { dispatch }) => {
    const payload = {
      page: 0,
      size: 500,
    };
    const response: IProjectsDB = (
      await axios.get(process.env.NX_BASE_URL + `/projects`, {
        params: payload,
      })
    ).data.result;
    const data: IProject[] = response.data;
    const dataNew = data.filter((v: any) => {
      return v && v.name;
    });
    const dataForStore: IRProject[] = dataNew.map((e: IProject) => {
      return {
        _id: e._id,
        name: e.name,
        project_key: e.project_key,
      };
    });

    dispatch(setProjects(dataForStore));
  }
);

export const addProjectApi = createAsyncThunk(
  'projects/add',
  async (project: any, { dispatch }) => {
    const data: IProject = (
      await axios.post(process.env.NX_BASE_URL + `/projects`, project)
    ).data.result;

    const dataForStore: IRProject = {
      _id: data._id,
      name: data.name,
      project_key: data._id,
    };
    dispatch(addProject(dataForStore));
    const da = document.getElementById(data._id)?.click();
  }
);

const projectAdapter = createEntityAdapter<IRProject>({
  selectId: ({ _id }) => _id,
});

export const {
  selectAll: selectProjects,
  selectById: selectProjectById,
  selectIds: selectProjectIds,
} = projectAdapter.getSelectors((state: IRootState) => {
  return state.project.projects;
});

export const selectActiveProjectId = createSelector(
  (state: IRootState) => state.project.projects.activeProjectId,
  (data) => data
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectAdapter.getInitialState({
    activeProjectId: null,
  }),
  reducers: {
    setProjects: projectAdapter.setAll,
    addProject: projectAdapter.addOne,
    addProjects: projectAdapter.addMany,
    setActiveProjectId: (state, action) => {
      state.activeProjectId = action.payload;
    },
    removeActiveProjectId: (state, action) => {
      state.activeProjectId = null;
    },
  },
});

export const {
  setProjects,
  addProject,
  addProjects,
  setActiveProjectId,
  removeActiveProjectId,
} = projectsSlice.actions;
export default projectsSlice.reducer;
