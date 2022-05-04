import mock from '../mock';

const projectDB = {
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

mock.onGet('/projects').reply((request) => {
  return [200, projectDB.projects];
});

mock.onGet('/project').reply((request) => {
  const { id } = request.params;
  const response = projectDB.projects.find(
    (project) => project.id.toString() === id.toString()
  );
  return [200, response];
});

mock.onPost('/project').reply((request) => {
  let obj = JSON.parse(request.data);
  let response = projectDB.projects.push(obj.params);
  return [200, response];
});
