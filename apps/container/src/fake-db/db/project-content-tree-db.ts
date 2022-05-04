// Imports
import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';

// Interfaces
export interface IProjectContentTreeItem {
  _id: string;
  name: string;
  type: string;
  category: string;
  icon: string;
  project_id: string;
  project_content_id: string;
  child_allowed: number;
  is_delete: number;
  children: IProjectContentTreeItem[];
  created_at: string;
  updated_at: string;
  __v?: number;
}

export interface IProjectContentTreeItemProperties {
  _id: string;
  name: string;
  type: string;
  properties: Array<string>;
}

export interface IProjectContentTreeDB {
  data: IProjectContentTreeItem[];
  count: number;
}

// Structure
export const projectContentTreeDB = {
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
  count: 2,
};

// API Endpoints
// READ
mock
  .onGet(new RegExp(process.env.NX_BASE_URL + '/project-content-tree'))
  .reply((request) => {
    const filters = JSON.parse(request.params.filters);
    const project_id = filters.project_id;
    const filteredProjects = projectContentTreeDB.data.filter(
      (e) => e.project_id === project_id
    );

    return [
      200,
      onSuccess({
        data: filteredProjects,
        count: filteredProjects.length,
      }),
    ];
  });

// CREATE
mock
  .onPost(
    new RegExp(
      process.env.NX_BASE_URL + '/project-content-tree/child/([a-z0-9]*)'
    )
  )
  .reply((request) => {
    // Extract project id from Url
    const project_id = new RegExp(
      process.env.NX_BASE_URL + '/project-content-tree/child/([a-z0-9]*)'
    ).exec(request.url as string)?.[1];

    let newData = JSON.parse(request.data);
    newData = {
      ...newData,
      _id: (Math.random() * 100).toString().split('.').join(''),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (newData.type === 'Pipelines') {
      newData.children = [
        {
          ...newData,
          _id: (Math.random() * 100).toString().split('.').join(''),
          name: 'Definition',
          type: 'DEFINITION',
        },
        {
          ...newData,
          _id: (Math.random() * 100).toString().split('.').join(''),
          name: 'Schedule',
          type: 'SCHEDULE',
        },
        {
          ...newData,
          _id: (Math.random() * 100).toString().split('.').join(''),
          name: 'Stats',
          type: 'STATS',
        },
      ];
    }

    let updatedTreeItem = null;
    projectContentTreeDB.data.map((e: IProjectContentTreeItem) => {
      const data = e;
      if (e.project_id === project_id && e.type === newData.type) {
        data.children.push(newData);
        updatedTreeItem = data;
      }
      return data;
    });
    return [200, onSuccess(updatedTreeItem)];
  });
