import { Story, Meta } from '@storybook/react';
import DataTable, { DataTableProps } from './data-table';
import {} from 'react-table';

export default {
  component: DataTable,
  title: 'POC/Molecules/Data-Table',
} as Meta;

const Template: Story<DataTableProps> = (args) => <DataTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      id: { key: 'string', value: '01' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1 asddadd adsdd d', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '02' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '03' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '04' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '05' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '06' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '07' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '08' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '09' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '10' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '11' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '12' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '13' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '14' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '15' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '16' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '17' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '18' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '19' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '20' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '21' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '22' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '23' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '24' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
  ],
  columns: [
    {
      Header: 'Id',
      accessor: 'id',
      filter: 'fuzzyText',
      width: 100,
    },
    {
      Header: 'Name',
      accessor: (d: any) => d.name,
      filter: 'fuzzyText',
      width: 400,
    },
    {
      Header: 'Type',
      accessor: 'type',
      filter: 'fuzzyText',
      width: 400,
    },
    {
      Header: 'Public',
      accessor: 'public',
      filter: 'fuzzyText',
      width: 150,
    },
    {
      Header: 'Referred',
      accessor: 'referred',
      filter: 'fuzzyText',
      width: 200,
    },
  ],
};
