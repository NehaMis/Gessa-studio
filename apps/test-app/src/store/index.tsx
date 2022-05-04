import { configureStore, EntityState } from '@reduxjs/toolkit';
import projectReducer, { IProjectFormatted } from './projectsSlice';
import workerReducer, { IWorkerState } from './workerSlice';
import axios from 'axios';

export interface IRootState {
  worker: IWorkerState;
  projects: EntityState<IProjectFormatted>;
}

export default configureStore({
  reducer: {
    worker: workerReducer,
    projects: projectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          axios,
        },
      },
    }),
});
