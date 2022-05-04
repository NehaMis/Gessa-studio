import {
  createSlice,
  createEntityAdapter,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import { IRootState } from '../store';

// type _IRProjectTabs = EntityState<IRProjectTab>;
// export interface IRProjectTabs extends _IRProjectTabs {
//   activeProjectTabId: string;
// }

// type _IRDialog = EntityState<IRDialogStatus>;

export interface _IRDialog {
  dialogStatus: boolean;
}

export interface IRDialogStatus {
  openDialog: BooleanConstructor;
}

const dialogStatusAdapter = createEntityAdapter<IRDialogStatus>();

// export const { selectAll: selectDialogStatus } =
//   dialogStatusAdapter.getSelectors(
//     (state: IRootState) => state.project.dialogSlice
//   );

export const selectActiveDialogStatus = createSelector(
  (state: IRootState) => state.project.dialogSlice.dialogStatus,
  (data) => data
);

const dialogStatusSlice = createSlice({
  name: 'projects',
  initialState: dialogStatusAdapter.getInitialState({
    dialogStatus: null,
  }),
  reducers: {
    setDialogStatus: (state, action) => {
      state.dialogStatus = action.payload;
    },
  },
});

export const { setDialogStatus } = dialogStatusSlice.actions;
export default dialogStatusSlice.reducer;
