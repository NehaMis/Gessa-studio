import { IMicroFrontend } from '.';

const MFMicroFrontendDemo: IMicroFrontend = {
  url: 'http://localhost:4203/remoteEntry.js',
  scope: 'app2',
  components: {
    Button: './Button',
  },
  slices: {},
  routes: {
    default: './routes',
  },
};

export default MFMicroFrontendDemo;
