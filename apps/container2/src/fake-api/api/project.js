import mock from '../mock';

const projectsApi = {
  projects: [
    {
      id: '1',
      name: 'Analytics',
    },
    {
      id: '2',
      name: 'Finance',
    },
    {
      id: '3',
      name: 'HR',
    },
  ],
};

mock.onGet('/api/projects').reply((config) => {
  return [200, projectsApi.projects];
});

mock.onGet('/api/project').reply((config) => {
  const { id } = config.params;
  const response = projectsApi.projects.find((project) => project.id == id);
  return [200, response];
});

mock.onPost('/api/project').reply((config) => {
  let obj = JSON.parse(config.data);
  let response = projectsApi.projects.push(obj.params);
  return [200, response];
});
