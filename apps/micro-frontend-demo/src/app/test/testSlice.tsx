import { createSlice } from '@reduxjs/toolkit';

export interface ITestSlice {
  value: string;
}

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 'This text from store changes on input',
  },
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = testSlice.actions;

export default testSlice.reducer;
