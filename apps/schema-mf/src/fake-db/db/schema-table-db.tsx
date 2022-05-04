// Imports
import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';
import generateRandomString from '../../utils/randomString';

// Interfaces

export interface ISchemaDataPayload {
  schemaName: string;
  schemaCreatedBy: string;
  schemaCreatedOn: string;
}
