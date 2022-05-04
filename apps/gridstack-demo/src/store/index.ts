import gridStore from '../app/pages/projects/store';

export { default as project } from '../app/pages/projects/store';

export interface IRootState {
  gridStore: {};
}

const reducers = {
  gridStore,
};

export default reducers;
