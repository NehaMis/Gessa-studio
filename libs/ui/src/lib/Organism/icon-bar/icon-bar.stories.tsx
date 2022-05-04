import { IconBar, IconBarProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';

export default {
  component: IconBar,
  title: 'Organism/Icon bar',
  argTypes: {},
} as Meta;

const Template: Story<IconBarProps> = (args) => <IconBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      id: '2',
      type: 'input', // input node
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
      data: {
        component: 'GessaCard1',
        props: {
          icon: {
            name: 'Menu-Transform',
            size: 30,
            color: '#ffffff',
            label: 'Menu-Transform',
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
  ],
};
