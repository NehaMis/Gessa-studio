import mock from '../mock';

const projectMenusApi = {
  'project-menu': [
    {
      id: '1',
      name: 'Dashboard',
      project_id: [1, 2, 3],
    },
    {
      id: '2',
      name: 'Backend',
      project_id: [1, 2],
    },
    {
      id: '3',
      name: 'Frontend',
      project_id: [1, 2],
    },
    {
      id: '4',
      name: 'Dataops',
      project_id: [1, 2, 3],
    },
    {
      id: '5',
      name: 'Micro Apps',
      project_id: [1, 2],
    },
    {
      id: '6',
      name: 'DevOps',
      project_id: [1, 2],
    },
    {
      id: '7',
      name: 'Project Configuration',
      project_id: [1, 2],
    },
  ],
};

mock.onGet('/api/project-menus').reply((config) => {
  return [200, projectMenusApi['project-menu']];
});

mock.onGet('/api/project-menu').reply((config) => {
  const { id } = config.params;
  const response = projectMenusApi['project-menu'].find((menu_item) =>
    menu_item.project_id.includes(id)
  );
  return [200, response];
});
