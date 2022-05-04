import {
  createSlice,
  createEntityAdapter,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store';

type _IRProjectTabs = EntityState<IRProjectTab>;
export interface IRProjectTabs extends _IRProjectTabs {
  activeProjectTabId: string;
}

export interface IRProjectTab {
  id?: string;
  name?: string;
  type?: string;
  project_content_id?: string;
  project_id?: string;
}

const projectTabAdapter = createEntityAdapter<IRProjectTab>();

export const {
  selectAll: selectProjectTabs,
  selectById: selectProjectTabById,
  selectIds: selectProjectTabIds,
} = projectTabAdapter.getSelectors(
  (state: IRootState) => state.project.projectTabs
);

export const selectActiveProjectTabId = createSelector(
  (state: IRootState) => state.project.projectTabs.activeProjectTabId,
  (data) => data
);

const projectTabsSlice = createSlice({
  name: 'projects',
  initialState: projectTabAdapter.getInitialState({
    activeProjectTabId: null,
  }),
  reducers: {
    setProjectTabs: projectTabAdapter.setAll,
    addProjectTab: projectTabAdapter.addOne,
    addProjectTabs: projectTabAdapter.addMany,
    upsertProjectTab: projectTabAdapter.upsertOne,
    removeProjectTab: projectTabAdapter.removeOne,
    removeAllProjectTabs: projectTabAdapter.removeAll,
    setActiveProjectTabId: (state, action) => {
      state.activeProjectTabId = action.payload;
    },
    setGettingStartedProjectTab: (state) => {
      projectTabAdapter.removeAll(state);
      projectTabAdapter.addOne(state, {
        id: '1',
        name: 'Get Started',
        project_content_id: '',
        project_id: '',
        type: 'GETSTARTED',
      });
      state.activeProjectTabId = '1' as any;
    },
    removeActiveProjectTabId: (state, action) => {
      state.activeProjectTabId = null;
    },
  },
});

export const {
  setProjectTabs,
  addProjectTab,
  addProjectTabs,
  upsertProjectTab,
  removeProjectTab,
  removeAllProjectTabs,
  setActiveProjectTabId,
  removeActiveProjectTabId,
  setGettingStartedProjectTab,
} = projectTabsSlice.actions;
export default projectTabsSlice.reducer;
