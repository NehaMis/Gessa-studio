import { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import Navbar from '../components/navbar/navbar';
import routes from '../../routing/routesConfig';
import { ChartBox, IconBar } from '@gessa/ui';

const Layout = (props: any) => {
  const data = [
    {
      id: '2',
      type: 'source', // input node
      data: {
        component: 'GessaCard1',
        props: {
          icon: {
            name: 'Menu-Mysql',
            size: 30,
            color: '#ffffff',
            label: 'Masa',
          },
          leftAccent: '',
          text: '',
        },
      },
      position: { x: 100, y: 365 },
      AssociatedForm: [
        {
          type: 'text',
          value: ['uname 123'],
          name: 'userName',
          label: 'Name',
          placeholder: 'Enter Name',
          options: [],
          required: true,
          validation: {
            name: 'userName',
            required: true,
            errorMessage: 'Name is required',
            min: 0,
            max: 0,
          },
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
          validation: {
            name: 'connectorName',
            required: true,
            errorMessage: 'Connector name is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'select',
          name: 'connectorType',
          value: ['input'],
          label: 'Connector Type',
          placeholder: 'Select Connector Type ',
          options: [
            { value: 'input', label: 'input' },
            { value: 'store', label: 'store' },
          ],
          required: true,
          validation: {
            name: 'connectorType',
            required: true,
            errorMessage: 'connector type is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'text',
          value: ['endpoint dataframe name'],
          label: 'Data Frame Name',
          name: 'dataFrameName',
          placeholder: 'Enter Frame Name',
          options: [],
          required: true,
          validation: {
            name: 'dataFrameName',
            required: true,
            errorMessage: 'data frame name is required',
            min: 0,
            max: 0,
          },
        },
      ],
      vaidationSchema: [],
    },
    {
      id: '3',
      type: 'store', // input node
      data: {
        component: 'GessaCard1',
        props: {
          icon: {
            name: 'Menu-Postgres',
            size: 30,
            color: '#ffffff',
            label: 'Hatti',
          },
          leftAccent: '',
          text: '',
        },
      },
      position: { x: 150, y: 400 },
      AssociatedForm: [
        {
          type: 'text',
          value: ['endpoint username55'],
          name: 'userName',
          label: 'Name',
          placeholder: 'Enter Name',
          options: [],
          required: true,
          validation: {
            name: 'userName',
            required: true,
            errorMessage: 'Name is required',
            min: 0,
            max: 0,
          },
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
          validation: {
            name: 'connectorName',
            required: true,
            errorMessage: 'Connector name is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'select',
          name: 'connectorType',
          value: ['store'],
          label: 'Connector Type',
          placeholder: 'Select Connector Type ',
          options: [
            { value: 'input', label: 'input' },
            { value: 'store', label: 'store' },
          ],
          required: true,
          validation: {
            name: 'connectorType',
            required: true,
            errorMessage: 'connector type is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'multiselect',
          name: 'chooseDataFrame',
          value: ['input1'],
          label: 'Choose Data Frame multi',
          placeholder: 'Choose data frames ',
          options: [
            { value: 'input1', label: 'input1' },
            { value: 'store1', label: 'store1' },
          ],
          validation: {
            name: 'chooseDataFrame',
            required: true,
            errorMessage: 'data frame is required',
            min: 0,
            max: 0,
          },
        },
        {
          type: 'text',
          value: ['endpoint dataframe name'],
          label: 'Data Frame Name',
          name: 'dataFrameName',
          placeholder: 'Enter Frame Name',
          options: [],
          required: true,
          validation: {
            name: 'dataFrameName',
            required: true,
            errorMessage: 'Data frame  is required',
            min: 0,
            max: 0,
          },
        },
      ],
    },
    {
      id: '4', // input node
      type: 'source',
      data: {
        component: 'GessaCard1',
        props: {
          icon: {
            name: 'Menu4',
            size: 30,
            color: '#ffffff',
            label: 'Menu4',
          },
          leftAccent: '',
          text: '',
        },
      },
      position: { x: 150, y: 400 },
      AssociatedForm: [
        {
          type: 'text',
          value: ['endpoint username55'],
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
          value: ['store'],
          label: 'Connector Type',
          placeholder: 'Select Connector Type ',
          options: [
            { value: 'input', label: 'input' },
            { value: 'store', label: 'store' },
          ],
          required: true,
          validation: [],
        },
        {
          type: 'text',
          value: ['endpoint dataframe name'],
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
      id: '5',
      type: 'store', // input node
      data: {
        component: 'GessaCard1',
        props: {
          icon: {
            name: 'Menu5',
            size: 30,
            color: '#ffffff',
            label: 'Menu5',
          },
          leftAccent: '',
          text: '',
        },
      },
      position: { x: 150, y: 400 },
      AssociatedForm: [
        {
          type: 'text',
          value: ['endpoint username55'],
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
          value: ['store'],
          label: 'Connector Type',
          placeholder: 'Select Connector Type ',
          options: [
            { value: 'input', label: 'input' },
            { value: 'store', label: 'store' },
          ],
          required: true,
          validation: [],
        },
        {
          type: 'text',
          value: ['endpoint dataframe name'],
          label: 'Data Frame Name',
          name: 'dataFrameName',
          placeholder: 'Enter Frame Name',
          options: [],
          required: true,
          validation: [],
        },
      ],
    },
  ];

  const data2 = [
    {
      id: '1',
      type: 'source', // input node
      data: {
        component: 'Card1',
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
      AssociatedForm: [],
    },
    {
      id: '2',
      type: 'output', // input node
      data: {
        component: 'Card1',
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
      position: { x: 100, y: 100 },
      AssociatedForm: [],
    },
    { id: 'e1-2', source: '1', target: '2', animated: true },
  ];
  return (
    <div className="flex w-full overflow-hidden">
      <Navbar />
      <div className="flex flex-col flex-1">
        <div className="flex-1">
          <Suspense fallback="Loading...">{renderRoutes(routes)}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
