import { IMicroFrontend } from '.';

const MFMicroFrontendDemo: IMicroFrontend = {
  url: process.env.NX_MICRO_FRONTEND_REMOTE_MICRO_FRONTEND_DEMO as string,
  scope: 'microFrontendDemo',
  components: {
    Test: './Test',
  },
  slices: {
    default: './testSlice',
  },
  routes: {
    default: './routes',
  },
};

export default MFMicroFrontendDemo;
