import { IMicroFrontend } from '.';

const MFFlowChartApp = {
  url: process.env.NX_MICRO_FRONTEND_FLOW_CHART_APP_DEMO as string,
  scope: 'flowChartApp',
  components: {
    FlowChart: './FlowChart',
    Test: './Test',
  },
  slices: {
    chartDataObj: './FlowChartSlice',
  },
  routes: {
    // default: './RoutingDemoConfig',
  },
};

export default MFFlowChartApp;
