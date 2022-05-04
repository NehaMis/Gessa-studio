import MFFlowChartApp from './flow-chart-app';
import MFMicroFrontendDemo from './micro-frontend-demo';
import MFProjects from './projects';

export { default as FlowChartApp } from './flow-chart-app';
export { default as MicroFrontendDemo } from './micro-frontend-demo';
export { default as Projects } from './projects';

export interface IMicroFrontend {
  url: string;
  scope: string;
  components: {
    [key: string]: string;
  };
  slices: {
    [key: string]: string;
  };
  routes: {
    [key: string]: string;
  };
}

export interface IMicroFrontends {
  [key: string]: IMicroFrontend;
}

const microFrontends: IMicroFrontends = {
  flowChartApp: MFFlowChartApp,
  microFrontendDemo: MFMicroFrontendDemo,
  // projects: MFProjects,
};

export default microFrontends;
