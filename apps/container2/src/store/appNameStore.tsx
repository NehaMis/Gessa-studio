import { createSlice } from '@reduxjs/toolkit';

export const appNameSlice = createSlice({
  name: 'appName',
  initialState: {
    value: 'Container2',
  },
  reducers: {},
});

export default appNameSlice.reducer;
