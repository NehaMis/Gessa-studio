// import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import themeStore from './themeStore';
import tabsStore from './tabsStore';
import endpointStore from './endpointStore';
import appNameStore from './appNameStore';
import projectData from './projectData';
import testStore from 'microFrontendDemo/testSlice';

// const rootReducer = combineReducers({
//     counter: counterReducer,
//     isLogged: loggedReducer
// })

export default configureStore({
  reducer: {
    appName: appNameStore,
    theme: themeStore,
    tabs: tabsStore,
    project: projectData,
    endpointData: endpointStore,
    test: testStore,
  },
});
