import { AuthContext, ThemeContext } from '../../context';
import { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import {
  IChartData,
  IDataFlowGetApi,
  IDataFlowUpdateApi,
} from 'apps/flow-chart-app/src/fake-db/db/data-flow-db';
import {
  getConnectors,
  selectAllConnectors,
} from './flow-chart/store/connectorSlice';
import { IConnectorGetApi } from '../../fake-db/db/connector-db';
import {
  selectDataFlowDataById,
  getFlowChartData,
} from './flow-chart/store/dataFlowDataSlice';
import { selectNodes } from './flow-chart/store/nodesDataSlice';

interface Props {
  project_id: string;
  project_content_id: string;
  flow_id?: string;
}

const TestFlowChart = (props: Props) => {
  const theme = useContext(ThemeContext);
  const rootState = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();
  const [selectedPipeline, setSelectedPipeline] = useState<any>();

  let tRef: any;

  useEffect(() => {
    const params: IConnectorGetApi = {
      page: 0,
      size: 10,
    };
    dispatch(getConnectors(params));
    const params2: IDataFlowGetApi = {
      page: 0,
      size: 10,
      filters: {
        project_id: selectedPipeline.proj_id,
        pipeline_id: selectedPipeline.pipe_id,
      },
    };
    dispatch(getFlowChartData(params2));
  }, [dispatch, selectedPipeline]);

  useEffect(() => {
    setSelectedPipeline({
      proj_id: props.project_id,
      pipe_id: props.project_content_id,
      flow_id: props.flow_id || '',
    });
  }, [props]);

  useEffect(() => {
    //console.log('pipeline selected');
  }, [selectedPipeline]);

  if (selectedPipeline) {
    const dataFlowDefinition: any = selectDataFlowDataById(
      rootState,
      selectedPipeline.pipe_id
    );
  }
  const nodesData = selectNodes(rootState);
  const rawConnectors = selectAllConnectors(rootState);

  return <div>Testing flow chart</div>;
};

export default TestFlowChart;
