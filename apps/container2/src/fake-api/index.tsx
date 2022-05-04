import './api/project';
import './api/project-menu';
import './api/project-tree';
import history from '../utils/history';
import mock from './mock';
declare let module: any;

mock.onAny().passThrough();

if (module?.hot?.status() === 'apply') {
  const { pathname } = history.location;
  navigate('/loading');
  navigate({ pathname });
}
