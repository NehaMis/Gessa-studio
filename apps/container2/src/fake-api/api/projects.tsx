import { Panorama } from '@mui/icons-material';
import mock from '../mock';
import BaseUrl from './baseUrl';
/***
 * Interface
 */

export interface IProjects {
  _id: string;
  name: string;
  description: string;
  tags: Array<string>;
  micro_apps?: Array<string>;
  is_delete?: number;
  users: Array<Users>;
  created_at: Date;
  updated_at: Date;
}

export interface Users {
  project_id: string;
  user_id: string;
  roles: string;
  _id: string;
}

/**
 * Sample Api response
 */
export class ProjectsApi {
  public static readonly projectsApi = {
    statusCode: 200,
    message: 'success',
    result: {
      data: [
        {
          _id: '618de60f00de3a5905c94bf1',
          project_key: 'string1',
          name: 'Data transformation project',
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
          project_key: 'project key 11',
          name: 'string',
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
          _id: '61a5af31cec98c72bb433d75',
          name: 'string111',
          icon: 'string',
          description: 'string',
          users: [
            {
              user_id: 'string',
              _id: '61a5af31cec98c72bb433d76',
            },
          ],
          tags: ['string'],
          micro_apps: ['string'],
          is_delete: 0,
          created_at: '2021-11-30T04:57:21.316Z',
          updated_at: '2021-11-30T04:57:21.316Z',
          __v: 0,
        },
        {
          _id: '61a5f38bcec98c72bb433dbb',
          tags: [],
          micro_apps: [],
          is_delete: 0,
          users: [],
          created_at: '2021-11-30T09:48:59.137Z',
          updated_at: '2021-11-30T09:48:59.137Z',
          __v: 0,
        },
        {
          _id: '61a5f3c524517c01e401d1ff',
          tags: [],
          micro_apps: [],
          is_delete: 0,
          users: [],
          created_at: '2021-11-30T09:49:57.180Z',
          updated_at: '2021-11-30T09:49:57.180Z',
          __v: 0,
        },
        {
          _id: '61a711f69b3947317ebe8de3',
          name: 'proj1234',
          icon: 'string',
          description: 'string',
          users: [
            {
              user_id: 'string',
              _id: '61a711f69b3947317ebe8de4',
            },
          ],
          tags: ['string'],
          micro_apps: ['string'],
          is_delete: 0,
          created_at: '2021-12-01T06:11:02.965Z',
          updated_at: '2021-12-01T06:11:02.965Z',
          __v: 0,
        },
        {
          _id: '61a87112767507b150a39a01',
          name: 'Project 1',
          description: 'Project 1 for app',
          tags: ['devops', 'microfrontend'],
          micro_apps: [],
          is_delete: 0,
          users: [],
          created_at: '2021-12-02T07:09:06.222Z',
          updated_at: '2021-12-02T07:09:06.222Z',
          __v: 0,
        },
        {
          _id: '61a873c5767507b150a39a0d',
          name: 'Project 2',
          description: 'Project 2 for app',
          tags: ['devops', 'microfrontend'],
          micro_apps: [],
          is_delete: 0,
          users: [],
          created_at: '2021-12-02T07:20:37.089Z',
          updated_at: '2021-12-02T07:20:37.089Z',
          __v: 0,
        },
        {
          _id: '61a8942b0c01e9b1f29f7828',
          name: 'Project 3',
          description: 'Project 3 for app',
          tags: ['devops', 'microfrontend'],
          micro_apps: [],
          is_delete: 0,
          users: [],
          created_at: '2021-12-02T09:38:51.354Z',
          updated_at: '2021-12-02T09:38:51.354Z',
          __v: 0,
        },
      ],
      count: 9,
    },
  };

  public static readonly get = (params: any) => {
    if (params.id) {
      //   const index = this.projectsApi.result.findIndex(
      //     (value: any) => value._id === params.id
      //   );
      //   if (index) {
      //     return this.projectsApi.result[index];
      //   } else {
      //     return this.projectsApi;
      //   }
      return ProjectsApi.projectsApi;
    } else {
      return ProjectsApi.projectsApi;
    }
  };
}
