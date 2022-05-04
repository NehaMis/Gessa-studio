import React from 'react';
import Test from './test/test';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import testSlice, { ITestSlice } from './test/testSlice';
import appNameSlice, { IAppNameSlice } from './appNameStore';

export interface IRootState {
  test: ITestSlice;
  appName: IAppNameSlice;
}

const myStore = configureStore({
  reducer: {
    test: testSlice,
    appName: appNameSlice,
  },
});

const app = () => {
  return (
    <Provider store={myStore}>
      <div>
        <Test />
      </div>
    </Provider>
  );
};

export default app;
