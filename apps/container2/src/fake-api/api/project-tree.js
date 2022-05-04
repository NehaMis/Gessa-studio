import mock from '../mock';

const projectTreesApi = {
  'project-tree': [
    {
      project_id: '1',
      tree: [
        {
          id: '1',
          name: 'Connectors',
          children: [],
        },
        {
          id: '2',
          name: 'Pipeline',
          children: [
            {
              id: '3',
              name: 'Pipeline 1',
              children: [
                {
                  id: '4',
                  name: 'Definition',
                  children: [
                    {
                      id: '7',
                      name: 'Definition 1',
                    },
                    {
                      id: '8',
                      name: 'Definition 2',
                    },
                    {
                      id: '9',
                      name: 'Definition 3',
                    },
                  ],
                },
                {
                  id: '5',
                  name: 'Schedule',
                  children: [],
                },
                {
                  id: '6',
                  name: 'Stats',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

mock.onGet('/api/project-trees').reply((config) => {
  return [200, projectTreesApi['project-tree']];
});

mock.onGet('/api/project-tree').reply((config) => {
  const { id } = config.params;
  let response = projectTreesApi['project-tree'].find((tree_item) =>
    tree_item.project_id.includes(id)
  );
  if (!response) {
    response = {
      project_id: id,
      tree: [],
    };
  }
  return [200, response];
});

mock.onPost('/api/project-tree').reply((config) => {
  let obj = JSON.parse(config.data);
  let allData = JSON.parse(JSON.stringify(projectTreesApi['project-tree']));
  let response = projectTreesApi['project-tree'].push(obj.params[0]);
  return [200, response];
});
