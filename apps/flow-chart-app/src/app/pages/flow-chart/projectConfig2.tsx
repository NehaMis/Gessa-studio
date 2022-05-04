import { Navigate } from 'react-router-dom';
import AddPipeline from './components/add-pipeline/add-pipeline-v2';
import FlowChart from './FlowChart';
import { type2Data } from './components/add-pipeline/pipelineFields';

const MyRoutes = {
  routes: [
    {
      path: '',
      element: <Navigate to="chart" />,
    },
    // {
    //   path: 'add-pipeline',
    //   element: <AddPipeline newFields={type2Data} />,
    //   showInNavbar: true,
    //   name: 'Add Pipeline',
    // },
    {
      path: 'chart',
      element: (
        <FlowChart
          project_id={'61a8942b0c01e9b1f29f7828'}
          project_content_id={'61a8942b0c01e9b1f29f782b'}
        />
      ),
    },
  ],
};

export default MyRoutes;
