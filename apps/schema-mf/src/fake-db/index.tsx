import './db/data-flow-db';
import mock from './mock';

// Set this to true to enable mock APIs
const enableMock = true;

if (enableMock) {
  /* mock.onAny().passThrough(); */
  mock.onGet('/Schema').reply(200, {
    schemaData: [
      { id: 'Schema1', name: 'Jane Cooper', date: new Date() },
      { id: 'Schema2', name: 'Leslie Alexander', date: new Date() },
      { id: 'Schema3', name: 'Robert Fox', date: new Date() },
    ],
  });
  mock.onGet('/SchemaDefinition').reply(200, {
    schemaDataDefinition: [
      { id: 'Schema Name', value: 'Schema1' },
      {
        fieldsData: [
          {
            field1: [
              { id: 'sectionTitle', value: 'Field 1' },
              { id: 'Field Name', value: 'User ID' },
              { id: 'Type', value: 'Integer' },
              { id: 'Mandatory', value: 'Yes' },
              { id: 'Unique', value: 'No' },
              { id: 'Null Allowed', value: 'No' },
              { id: 'Default Value', value: 'string' },
            ],
          },
          {
            field2: [
              { id: 'sectionTitle', value: 'Field 1' },
              { id: 'Field Name', value: 'User ID' },
              { id: 'Type', value: 'Integer' },
              { id: 'Mandatory', value: 'Yes' },
              { id: 'Unique', value: 'No' },
              { id: 'Null Allowed', value: 'No' },
              { id: 'Default Value', value: 'string' },
            ],
          },
        ],
      },
      { id: 'Created By', value: 'Jane Cooper' },
      { id: 'Created On', value: new Date() },
    ],
  });
  mock.onGet('/schema-definition-table').reply(200, {
    schemaTableData: [
      { id: '1234', name: 'Jane Cooper', mailId: "janecooper@mail.com" },
      { id: '1235', name: 'Leslie Alexander', mailId: "lesliealexander@mail.com" },
      { id: '1236', name: 'Robert Fox', mailId: "robertfox@mail.com" },
    ],
  });
} else {
  mock.restore();
}
