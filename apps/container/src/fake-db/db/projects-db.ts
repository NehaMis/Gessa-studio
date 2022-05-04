// Imports
import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';
import { projectContentTreeDB } from './project-content-tree-db';

// Interfaces
export interface IUser {
  project_id: string;
  user_id: string;
  roles: string;
  _id: string;
}

export interface IProject {
  _id: string;
  project_key: string;
  name: string;
  icon: string;
  description: string;
  users: IUser[];
  is_delete: number;
  created_at: Date;
  updated_at: Date;
  __v: number;
}

export interface IProjectsDB {
  data: IProject[];
  count: number;
}

// Structure
const projectsDB = {
  data: [
    {
      _id: '618de60f00de3a5905c94bf1',
      project_key: 'project-without-tree',
      name: 'Project without tree',
      icon: 'string',
      description: 'string',
      users: [
        {
          project_id: '0',
          user_id: '0',
          roles: 'string',
          _id: '618de68c5fe5827195bb01df',
        },
      ],
      is_delete: 0,
      created_at: '2021-11-12T03:57:03.563Z',
      updated_at: '2021-11-12T03:59:08.620Z',
      __v: 0,
    },
    {
      _id: '618e2ae01878ffd2b6ad2f2b',
      project_key: 'project-with-tree',
      name: 'Project with tree',
      icon: 'string',
      description: 'string',
      users: [
        {
          project_id: 'string',
          user_id: 'string',
          roles: 'string',
          _id: '618e2ae01878ffd2b6ad2f2c',
        },
      ],
      is_delete: 0,
      created_at: '2021-11-12T08:50:40.721Z',
      updated_at: '2021-11-12T08:50:40.721Z',
      __v: 0,
    },
    {
      _id: '61a8942b0c01e9b1f29f7828',
      project_key: 'live-project',
      name: 'live project',
      icon: 'string',
      description: 'string',
      users: [
        {
          project_id: '0',
          user_id: '0',
          roles: 'string',
          _id: '618de68c5fe5827195bb01df',
        },
      ],
      is_delete: 0,
      created_at: '2021-11-12T03:57:03.563Z',
      updated_at: '2021-11-12T03:59:08.620Z',
      __v: 0,
    },
  ],
  count: 3,
};

// API Endpoints
// READ
mock
  .onGet(new RegExp(process.env.NX_BASE_URL + '/projects'))
  .reply((request) => {
    return [200, onSuccess(projectsDB)];
  });

// CREATE
mock
  .onPost(new RegExp(process.env.NX_BASE_URL + '/projects'))
  .reply((request) => {
    let newData = JSON.parse(request.data);
    newData = {
      ...newData,
      _id: (Math.random() * 100).toString().split('.').join(''),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    projectContentTreeDB.data.push({
      _id: (Math.random() * 100).toString().split('.').join(''),
      name: 'Connectors',
      type: 'Connectors',
      category: '',
      icon: '',
      project_id: newData._id,
      project_content_id: '',
      child_allowed: 1,
      is_delete: 0,
      children: [],
      created_at: newData.created_at,
      updated_at: newData.updated_at,
      __v: 0,
    });
    projectContentTreeDB.data.push({
      _id: (Math.random() * 100).toString().split('.').join(''),
      name: 'Pipelines',
      type: 'Pipelines',
      category: '',
      icon: '',
      project_id: newData._id,
      project_content_id: '',
      child_allowed: 1,
      is_delete: 0,
      children: [],
      created_at: newData.created_at,
      updated_at: newData.updated_at,
      __v: 0,
    });

    projectsDB.data = [...projectsDB.data, newData];

    return [200, onSuccess(newData, 'project created successfully')];
  });
