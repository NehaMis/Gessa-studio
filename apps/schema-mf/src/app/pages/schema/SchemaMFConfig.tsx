import { lazy, Suspense } from 'react';
import { IPageConfig } from '../../../types/pageConfig';
import { Navigate } from 'react-router-dom';

const Schema = lazy(() => import('./schema-home/Schema'));
const SelectedSchemaDetails = lazy(() => import('./SelectedSchemaDetails'));
const SchemaMFConfig: IPageConfig = {
  routes: [
    {
      path: '',
      element: <Navigate to="Schema" />,
    },
    {
      path: 'Schema',
      element: (
         <Suspense fallback={<>...</>}>
          <Schema />
        </Suspense> 
      ),
    },
    {
      path: 'SchemaDefinition',
      element: (
         <Suspense fallback={<>...</>}>
          <SelectedSchemaDetails />
        </Suspense> 
      ),
    },
  ],
};

export default SchemaMFConfig;
