import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import FakeApiService from '../services/fakeApiService';

export const tabsSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTabId: '99',
    tabs: [
      {
        id: '99',
        title: 'Some tab',
        sidebar: false,
        unsaved: false,
        data: [
          {
            key: 'input1',
            value: 'This is input box in definition 1',
          },
          {
            key: 'formdata',
            value: [
              {
                type: 'text',
                value: ['from tab1'],
                name: 'userName',
                label: 'Name',
                placeholder: 'Enter Name',
                options: [],
                required: true,
                validation: [],
              },
              {
                type: 'select',
                name: 'connectorName',
                value: ['connector4'],
                label: 'Connector Name',
                placeholder: 'Select Connector',
                options: [
                  { value: 'connector1', label: 'connector1' },
                  { value: 'connector2', label: 'connector2' },
                  { value: 'connector3', label: 'connector3' },
                  { value: 'connector4', label: 'connector4' },
                ],
                required: true,
                validation: [],
              },
              {
                type: 'select',
                name: 'connectorType',
                value: ['ctype6'],
                label: 'Connector Type',

                placeholder: 'Select Connector Type ',
                options: [
                  { value: 'ctype1', label: 'ctype1' },
                  { value: 'ctype2', label: 'ctype2' },
                  { value: 'ctype3', label: 'ctype3' },
                  { value: 'ctype4', label: 'ctype4' },
                  { value: 'ctype5', label: 'ctype5' },
                  { value: 'ctype6', label: 'ctype6' },
                ],
                required: true,
                validation: [],
              },
              {
                type: 'text',
                value: ['frame from tab1'],
                label: 'Data Frame Name',
                name: 'dataFrameName',
                placeholder: 'Enter Frame Name',
                options: [],
                required: true,
                validation: [],
              },
            ],
          },
          {
            key: 'chart',
            value: [
              {
                id: '1',
                type: 'input', // input node
                data: {
                  component: 'GessaCard1',
                  props: {
                    icon: {
                      name: 'Preview',
                      size: 40,
                      color: '#459ff2',
                      label: 'Preview',
                    },
                    leftAccent: '',
                    text: '',
                  },
                },
                position: { x: 10, y: 10 },
                AssociatedForm: [
                  {
                    type: 'text',
                    value: ['from tab1 gessa card1'],
                    name: 'userName',
                    label: 'Name',
                    placeholder: 'Enter Name',
                    options: [],
                    required: true,
                    validation: [],
                  },
                  {
                    type: 'select',
                    name: 'connectorName',
                    value: ['connector4'],
                    label: 'Connector Name',
                    placeholder: 'Select Connector',
                    options: [
                      { value: 'connector1', label: 'connector1' },
                      { value: 'connector2', label: 'connector2' },
                      { value: 'connector3', label: 'connector3' },
                      { value: 'connector4', label: 'connector4' },
                    ],
                    required: true,
                    validation: [],
                  },
                  {
                    type: 'select',
                    name: 'connectorType',
                    value: ['ctype6'],
                    label: 'Connector Type',
                    placeholder: 'Select Connector Type ',
                    options: [
                      { value: 'ctype1', label: 'ctype1' },
                      { value: 'ctype2', label: 'ctype2' },
                      { value: 'ctype3', label: 'ctype3' },
                      { value: 'ctype4', label: 'ctype4' },
                      { value: 'ctype5', label: 'ctype5' },
                      { value: 'ctype6', label: 'ctype6' },
                    ],
                    required: true,
                    validation: [],
                  },
                  {
                    type: 'text',
                    value: ['frame from tab1 gessa'],
                    label: 'Data Frame Name',
                    name: 'dataFrameName',
                    placeholder: 'Enter Frame Name',
                    options: [],
                    required: true,
                    validation: [],
                  },
                ],
              },
              {
                id: '2',
                data: {
                  component: 'div',
                  props: { children: 'Default Code' },
                },
                position: { x: 80, y: 265 },
              },
              { id: 'e1-2', source: '1', target: '2', animated: true },
            ],
          },
        ],
      },
      {
        id: '100',
        title: 'Some tab2',
        data: [
          {
            key: 'input1',
            value: 'This is input box in definition 100',
          },
          {
            key: 'formdata',
            value: [
              {
                type: 'text',
                value: ['something'],
                name: 'userName',
                label: 'Name',
                placeholder: 'Enter Name',
                options: [],
                required: true,
                validation: [],
              },
              {
                type: 'select',
                name: 'connectorName',
                value: ['connector1'],
                label: 'Connector Name',
                placeholder: 'Select Connector',
                options: [
                  { value: 'connector1', label: 'connector1' },
                  { value: 'connector2', label: 'connector2' },
                  { value: 'connector3', label: 'connector3' },
                  { value: 'connector4', label: 'connector4' },
                ],
                required: true,
                validation: [],
              },
              {
                type: 'select',
                name: 'connectorType',
                value: ['ctyp2'],
                label: 'Connector Type',

                placeholder: 'Select Connector Type ',
                options: [
                  { value: 'ctype1', label: 'ctype1' },
                  { value: 'ctype2', label: 'ctype2' },
                  { value: 'ctype3', label: 'ctype3' },
                  { value: 'ctype4', label: 'ctype4' },
                  { value: 'ctype5', label: 'ctype5' },
                  { value: 'ctype6', label: 'ctype6' },
                ],
                required: true,
                validation: [],
              },
              {
                type: 'text',
                value: ['else data'],
                label: 'Data Frame Name',
                name: 'dataFrameName',
                placeholder: 'Enter Frame Name',
                options: [],
                required: true,
                validation: [],
              },
            ],
          },
          {
            key: 'chart',
            value: [
              {
                id: '1',
                type: 'input', // input node
                data: {
                  component: 'Card',
                  props: {
                    id: '5',
                    backgroundColor: 'white',
                    title: 'Title 5',
                    tagBackgroundColor: '#CEEFE1',
                    tagColor: '#169560',
                    tagName: 'Transform',
                    image: 'Tree',
                  },
                },
                position: { x: 10, y: 10 },
              },
              {
                id: '2',
                data: {
                  component: 'div',
                  props: { children: 'Default Code' },
                },
                position: { x: 80, y: 265 },
              },
              { id: 'e1-2', source: '1', target: '2', animated: true },
            ],
          },
        ],
      },
    ],
  },
  reducers: {
    addTab: (state, action) => {
      // Duplicate check
      const index = state.tabs.findIndex((e) => e.id === action.payload.id);
      if (index === -1) {
        action.payload.data.push({
          key: 'chart',
          value: [
            {
              id: '1',
              type: 'input', // input node
              data: {
                component: 'Card',
                props: {
                  id: '5',
                  backgroundColor: 'white',
                  title: 'Title 5',
                  tagBackgroundColor: '#CEEFE1',
                  tagColor: '#169560',
                  tagName: 'Transform',
                  image: 'Tree',
                },
              },
              position: { x: 10, y: 10 },
            },
            {
              id: '2',
              data: {
                component: 'div',
                props: { children: 'Default Code' },
              },
              position: { x: 80, y: 265 },
            },
            { id: 'e1-2', source: '1', target: '2', animated: true },
          ],
        });

        state.tabs.push(action.payload);
        state.activeTabId = state.tabs[state.tabs.length - 1].id;
      } else {
        state.activeTabId = action.payload.id;
      }
    },
    updateTab: (state, action) => {
      const index = state.tabs.findIndex((e) => e.id === action.payload.id);
      if (state && state.tabs && state.tabs[index] && state.tabs[index].id) {
        state.tabs[index] = { ...action.payload, id: state.tabs[index].id };
      }
      // state.tabs[index].data = action.payload.data;
    },

    updateData: (state, action) => {
      const index = state.tabs.findIndex((e) => e.id === action.payload.id);
      state.tabs[index].data = action.payload.data;
    },
    removeTab: (state, action) => {
      const index = state.tabs.findIndex((e) => e.id === action.payload.id);
      state.tabs.splice(index, 1);
      if (state.activeTabId === action.payload.id) {
        state.activeTabId = state.tabs[0].id;
        // state.activeTabId = state.tabs[state.tabs.length - 1].id;
      }
    },
    setActiveTab: (state, action) => {
      state.activeTabId = action.payload;
    },
  },
});

export const { addTab, updateTab, updateData, removeTab, setActiveTab } =
  tabsSlice.actions;

export default tabsSlice.reducer;
