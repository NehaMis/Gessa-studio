import { configureStore, EntityState } from '@reduxjs/toolkit';
import projectReducer, { IProject } from './projectsSlice';

export interface IRootState {
  projects: EntityState<IProject>;
}

export default configureStore({
  reducer: {
    projects: projectReducer,
  },
});
