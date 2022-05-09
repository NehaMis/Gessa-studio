import './db/data-flow-db';
import './db/report-data-db';
import './db/add-report-db';
import './db/column-options-data-db';
import mock from './mock';

// Set this to true to enable mock APIs
const enableMock = true;

if (enableMock) {
  mock.onAny().passThrough();
} else {
  mock.restore();
}
