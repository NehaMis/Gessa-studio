// import { ChartBox, ChartBoxProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';
import { CustomTreeview, CustomTreeviewProps } from './CustomTreeview';

export default {
  component: CustomTreeview,
  title: 'Organism/Treeview',
  argTypes: {},
} as Meta;

const Template: Story<CustomTreeviewProps> = (args) => (
  <CustomTreeview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      _id: '61af03c6767507b150a39b37',
      name: 'Connectors',
      type: 'Connectors',
      category: '',
      icon: '',
      project_id: '618e2ae01878ffd2b6ad2f2b',
      project_content_id: '61af03c6767507b150a39b37',
      child_allowed: 1,
      is_delete: 0,
      children: [
        {
          name: 'Connector 21 1',
          type: 'Connectors',
          category: 'string',
          icon: 'string',
          project_id: '618e2ae01878ffd2b6ad2f2b',
          project_content_id: '61af03c6767507b150a39b37',
          child_allowed: 1,
          is_delete: 0,
          _id: '61af0496767507b150a39b67',
          updated_at: '2021-12-07T06:52:06.854Z',
          created_at: '2021-12-07T06:52:06.854Z',
          children: [],
        },
      ],
      created_at: '2021-12-07T06:48:38.394Z',
      updated_at: '2021-12-07T06:52:06.854Z',
      __v: 0,
    },
    {
      _id: '61af03c6767507b150a39b38',
      name: 'Pipelines',
      type: 'Pipelines',
      category: '',
      icon: '',
      project_id: '618e2ae01878ffd2b6ad2f2b',
      project_content_id: '61af03c6767507b150a39b38',
      child_allowed: 1,
      is_delete: 0,
      children: [
        {
          name: 'Pipeline 21 1',
          type: 'Pipelines',
          category: 'string',
          icon: 'string',
          project_id: '618e2ae01878ffd2b6ad2f2b',
          project_content_id: '61af03c6767507b150a39b38',
          child_allowed: 1,
          is_delete: 0,
          _id: '61af043b767507b150a39b3f',
          updated_at: '2021-12-07T06:51:28.623Z',
          created_at: '2021-12-07T06:51:28.623Z',
          children: [
            {
              name: 'Definition',
              type: 'DEFINITION',
              category: '',
              icon: '',
              project_id: '618e2ae01878ffd2b6ad2f2b',
              project_content_id: '61af03c6767507b150a39b38',
              child_allowed: 1,
              is_delete: 0,
              _id: '61af043b767507b150a39b40',
              updated_at: '2021-12-07T06:51:28.623Z',
              created_at: '2021-12-07T06:51:28.623Z',
              children: [],
            },
            {
              name: 'Schedule',
              type: 'SCHEDULE',
              category: '',
              icon: '',
              project_id: '618e2ae01878ffd2b6ad2f2b',
              project_content_id: '61af03c6767507b150a39b38',
              child_allowed: 1,
              is_delete: 0,
              _id: '61af043b767507b150a39b41',
              updated_at: '2021-12-07T06:51:28.623Z',
              created_at: '2021-12-07T06:51:28.623Z',
              children: [],
            },
            {
              name: 'Stats',
              type: 'STATS',
              category: '',
              icon: '',
              project_id: '618e2ae01878ffd2b6ad2f2b',
              project_content_id: '61af03c6767507b150a39b38',
              child_allowed: 1,
              is_delete: 0,
              _id: '61af043b767507b150a39b42',
              updated_at: '2021-12-07T06:51:28.623Z',
              created_at: '2021-12-07T06:51:28.623Z',
              children: [],
            },
          ],
        },
      ],
      created_at: '2021-12-07T06:48:38.394Z',
      updated_at: '2021-12-07T06:51:28.623Z',
      __v: 0,
    },
    {
      _id: '61af03c6767507b150a39b37',
      name: 'Connectors',
      type: 'Connectors',
      category: '',
      icon: '',
      project_id: '618de60f00de3a5905c94bf1',
      project_content_id: '61af03c6767507b150a39b37',
      child_allowed: 1,
      is_delete: 0,
      children: [],
      created_at: '2021-12-07T06:48:38.394Z',
      updated_at: '2021-12-07T06:52:06.854Z',
      __v: 0,
    },
    {
      _id: '61af03c6767507b150a39b38',
      name: 'Pipelines',
      type: 'Pipelines',
      category: '',
      icon: '',
      project_id: '618de60f00de3a5905c94bf1',
      project_content_id: '61af03c6767507b150a39b38',
      child_allowed: 1,
      is_delete: 0,
      children: [],
      created_at: '2021-12-07T06:48:38.394Z',
      updated_at: '2021-12-07T06:51:28.623Z',
      __v: 0,
    },
    {
      _id: '61af03c6767507b150a39b38',
      name: 'Pipelines',
      type: 'Pipelines',
      category: '',
      icon: '',
      project_id: '61a8942b0c01e9b1f29f7828',
      project_content_id: '61af03c6767507b150a39b38',
      child_allowed: 1,
      is_delete: 0,
      children: [
        {
          name: 'Pipeline 21 1',
          type: 'Pipelines',
          category: 'string',
          icon: 'string',
          project_id: '61a8942b0c01e9b1f29f7828',
          project_content_id: '61af03c6767507b150a39b38',
          child_allowed: 1,
          is_delete: 0,
          _id: '61af043b767507b150a39b3f',
          updated_at: '2021-12-07T06:51:28.623Z',
          created_at: '2021-12-07T06:51:28.623Z',
          children: [
            {
              name: 'Definition',
              type: 'DEFINITION',
              category: '',
              icon: '',
              project_id: '61a8942b0c01e9b1f29f7828',
              project_content_id: '61af03c6767507b150a39b38',
              child_allowed: 1,
              is_delete: 0,
              _id: '61a897450c01e9b1f29f7832',
              updated_at: '2021-12-07T06:51:28.623Z',
              created_at: '2021-12-07T06:51:28.623Z',
              children: [],
            },
            {
              name: 'Schedule',
              type: 'SCHEDULE',
              category: '',
              icon: '',
              project_id: '61a8942b0c01e9b1f29f7828',
              project_content_id: '61af03c6767507b150a39b38',
              child_allowed: 1,
              is_delete: 0,
              _id: '61af043b767507b150a39b41',
              updated_at: '2021-12-07T06:51:28.623Z',
              created_at: '2021-12-07T06:51:28.623Z',
              children: [],
            },
            {
              name: 'Stats',
              type: 'STATS',
              category: '',
              icon: '',
              project_id: '61a8942b0c01e9b1f29f7828',
              project_content_id: '61af03c6767507b150a39b38',
              child_allowed: 1,
              is_delete: 0,
              _id: '61af043b767507b150a39b42',
              updated_at: '2021-12-07T06:51:28.623Z',
              created_at: '2021-12-07T06:51:28.623Z',
              children: [],
            },
          ],
        },
      ],
      created_at: '2021-12-07T06:48:38.394Z',
      updated_at: '2021-12-07T06:51:28.623Z',
      __v: 0,
    },
  ],
};
