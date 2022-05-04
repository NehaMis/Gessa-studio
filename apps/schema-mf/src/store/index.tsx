import schemaDataObj from '../app/pages/schema/store';
import { IRschemaDataSlice } from '../app/pages/schema/store/schemaDataSlice';

export { default as schemaDataObj } from '../app/pages/schema/store';

export interface IRootState {
  schemaDataObj: {
    schemaDataSlice: IRschemaDataSlice;
  };
}
const reducers = {
  schemaDataObj,
};

export default reducers;
