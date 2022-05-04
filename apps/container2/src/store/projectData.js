import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const projectData = createSlice({
  name: 'theme',
  initialState: {
    activeProjectId: '-1',
    tempData: [],
  },
  reducers: {
    addNewProject: (state, action) => {
      state.tempData = [];
      state.tempData = action.payload.tempData;
    },

    setActiveProject: (state, action) => {
      state.activeProjectId = action.payload;
    },
  },
});

export const { addNewProject, setActiveProject } = projectData.actions;

export default projectData.reducer;
