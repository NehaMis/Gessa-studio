import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
} from '@reduxjs/toolkit';
import { IRootState } from '../../../../store/index';
import { IFlowchart } from '../../../../fake-db/db/data-flow-db';

type _IRTabDraftSlice = EntityState<ITabDraftSlice>;

export interface IRTabDraftSlice extends _IRTabDraftSlice {
  activeTabDraftId: string;
}

export interface ITabDraftSlice {
  id: string;
  data: any;
}

const tabDraftAdapter = createEntityAdapter<ITabDraftSlice>({
  selectId: ({ id }) => id,
});

export const {
  selectAll: selectAllDraftData,
  selectById: selectDraftDataById,
  selectIds: selectDraftDataByIds,
} = tabDraftAdapter.getSelectors(
  (state: IRootState) => state.chartDataObj.tabDraftSlice
);
export const selectactiveTabDraftId = createSelector(
  (state: IRootState) => state.chartDataObj.tabDraftSlice.activeTabDraftId,
  (data) => data
);

const tabDraftSlice = createSlice({
  name: 'unsaved-drafts',
  initialState: tabDraftAdapter.getInitialState({ activeTabDraftId: null }),
  reducers: {
    setTabDraft: tabDraftAdapter.upsertOne,
  },
});

export const { setTabDraft } = tabDraftSlice.actions;
export default tabDraftSlice.reducer;
