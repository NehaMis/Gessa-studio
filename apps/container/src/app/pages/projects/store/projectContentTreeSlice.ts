import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store';
import {
  IProjectContentTreeDB,
  IProjectContentTreeItem,
  IProjectContentTreeItemProperties,
} from '../../../../fake-db/db/project-content-tree-db';
import axios from 'axios';
import { setEDPData } from './edpDataSlice';

type _IRProjectContentTree = EntityState<IRProjectContentTreeItem>;
export interface IRProjectContentTree extends _IRProjectContentTree {
  activeProjectContentId: string;
}

export interface IRProjectContentTreeItem {
  _id: string;
  name: string;
  project_id: string;
  project_content_id: string;
  type: string;
  nodeName?: string;
  nodeId?: string;
  children: IRProjectContentTreeItem[];
  isContentTree?: boolean;
  TransitionComponent?: any;

  [x: string]: any;
}

export const getProjectContentTreeApi = createAsyncThunk(
  'projects-content-tree',
  async (params: { project_id: string }, { dispatch }) => {
    const response: IProjectContentTreeDB = (
      await axios.get(process.env.NX_BASE_URL + `/project-content-tree`, {
        params: {
          page: 0,
          size: 10,
          filters: `{ "project_id": "${params.project_id}" }`,
        },
      })
    ).data.result;
    const data: IProjectContentTreeItem[] = response.data;

    const dataForStore: IRProjectContentTreeItem[] = data.map(
      (e: IProjectContentTreeItem) => {
        return mapDataToStore(e);
      }
    );

    function mapDataToStore(
      data: IRProjectContentTreeItem
    ): IRProjectContentTreeItem {
      return {
        _id: data._id,
        name: data.name,
        project_id: data.project_id,
        project_content_id: data.project_content_id,
        type: data.type,
        children: data.children.map((e: IRProjectContentTreeItem) =>
          mapDataToStore(e)
        ),
      };
    }

    dispatch(setProjectContentTree(dataForStore));
  }
);

export const addProjectContentTreeChildApi = createAsyncThunk(
  'projects-content-tree/child',
  async (params: any, { dispatch }) => {
    const response: IProjectContentTreeItem = (
      await axios.post(
        process.env.NX_BASE_URL +
          `/project-content-tree/child/` +
          params.content_tree_id,
        params.payload
      )
    ).data.result;
    dispatch(updateProjectContentTree({ id: response._id, changes: response }));
  }
);
export const updateProjectContentTreeChildApi = createAsyncThunk(
  'projects-content-tree/child',
  async (params: any, { dispatch }) => {
    const response: IProjectContentTreeItem = (
      await axios.put(
        process.env.NX_BASE_URL +
          `/project-content-tree/child/` +
          params.content_tree_id +
          `?child_id=` +
          params.child_id,
        params.data
      )
    ).data.result;
  }
);

export const updateProjectConnectorDetails = createAsyncThunk(
  '/project-connectors',
  async (params: any, { dispatch }) => {
    const response: IProjectContentTreeItem = (
      await axios.put(
        process.env.NX_CONNECTOR_BASE_URL + `/project-connectors`,
        params
      )
    ).data.result;
  }
);

export const getProjectConnectorDetails = createAsyncThunk(
  '/project-connectors',
  async (params: { connector_id: string }, { dispatch }) => {
    const response: IProjectContentTreeItemProperties = (
      await axios.get(
        process.env.NX_CONNECTOR_BASE_URL + `/project-connectors`,
        {
          params: {
            page: 0,
            size: 10,
            filters: `{ "connector_id": "${params.connector_id}" }`,
          },
        }
      )
    ).data.result;
  }
);

export const validateConnectorEndpoint = createAsyncThunk(
  'edp/endpoint/validate',
  async (params: any, { dispatch }) => {
    const response: IProjectContentTreeItemProperties = await axios.post(
      `http://3.134.193.236:8081/edp/endpoint/validate`,
      params
      // {
      //   endpointId: 'ep001',
      //   endpointName: 'dataeaze',
      //   endpointType: 'MySQL',
      //   details: [
      //     {
      //       key: 'jdbcUrl',
      //       value: 'jdbc:mysql://3.134.193.236:3306',
      //     },
      //     {
      //       key: 'user',
      //       value: 'chaminda',
      //     },
      //     {
      //       key: 'password',
      //       value: 'password',
      //     },
      //     {
      //       key: 'driver',
      //       value: 'com.mysql.jdbc.Driver',
      //     },
      //   ],
      // }
    );
    // dispatch(setEDPData({ data: { Status: 'Success' } }));
    dispatch(setEDPData(response));
  }
);

export const getOnlyProjectConnectorDetails = async (connector_id: string) => {
  const response: any = (
    await axios.get(process.env.NX_CONNECTOR_BASE_URL + `/project-connectors`, {
      params: {
        page: 0,
        size: 10,
        filters: `{ "connector_id": "${connector_id}" }`,
      },
    })
  ).data.result;

  return response;
};

const projectAdapter = createEntityAdapter<IRProjectContentTreeItem>({
  selectId: ({ _id }) => _id,
});

export const {
  selectAll: selectProjectContentTree,
  selectById: selectProjectContentById,
  selectIds: selectProjectContentIds,
} = projectAdapter.getSelectors(
  (state: IRootState) => state.project.projectContentTree
);

export const selectActiveProjectContentId = createSelector(
  (state: IRootState) =>
    state.project.projectContentTree.activeProjectContentId,
  (data) => data
);

const projectContentTreeSlice = createSlice({
  name: 'project-content-tree',
  initialState: projectAdapter.getInitialState({
    activeProjectContentId: null,
  }),
  reducers: {
    setProjectContentTree: projectAdapter.setAll,
    addProjectContent: projectAdapter.addOne,
    addProjectContentTree: projectAdapter.addMany,
    updateProjectContentTree: projectAdapter.updateOne,
    setActiveProjectContentId: (state, action) => {
      state.activeProjectContentId = action.payload;
    },
    removeActiveProjectContentId: (state, action) => {
      state.activeProjectContentId = null;
    },
  },
});

export const {
  setProjectContentTree,
  addProjectContent,
  addProjectContentTree,
  updateProjectContentTree,
  setActiveProjectContentId,
  removeActiveProjectContentId,
} = projectContentTreeSlice.actions;
export default projectContentTreeSlice.reducer;
