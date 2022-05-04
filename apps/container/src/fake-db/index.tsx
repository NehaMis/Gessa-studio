import './db/projects-db';
import './db/project-content-tree-db';
import mock from './mock';

// Set this to true to enable mock APIs
const enableMock = true;

if (enableMock) {
  mock.onAny().passThrough();
} else {
  mock.restore();
}
