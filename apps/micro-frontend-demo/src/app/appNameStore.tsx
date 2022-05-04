import { createSlice } from '@reduxjs/toolkit';

export interface IAppNameSlice {
  value: string;
}

export const appNameSlice = createSlice({
  name: 'appName',
  initialState: {
    value: 'Local',
  },
  reducers: {},
});

export default appNameSlice.reducer;
