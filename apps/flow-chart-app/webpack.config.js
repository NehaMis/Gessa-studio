const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  nrwlConfig(config);
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'flowChartApp',
      filename: 'remoteEntry.js',
      exposes: {
        // Module
        './FlowChart':
          './apps/flow-chart-app/src/app/pages/flow-chart/FlowChart.tsx',
        // './apps/flow-chart-app/src/app/pages/flow-chart/components/FlowChartUi.tsx',
        // './apps/flow-chart-app/src/app/pages/TestFlowChart.tsx',

        './Test': './apps/flow-chart-app/src/app/comonents/Test.tsx',

        // Slice
        './FlowChartSlice':
          './apps/flow-chart-app/src/app/pages/flow-chart/store/index.ts',

        // Route
        './RoutingDemoConfig':
          './apps/flow-chart-app/src/app/pages/flow-chart/FlowChartConfig.ts',
      },
      shared: {
        ...dependencies,
        // react: {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies.react,
        // },
        // 'react-dom': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['react-dom'],
        // },
        // 'react-router-dom': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['react-router-dom'],
        // },
        // 'react-redux': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['react-redux'],
        // },
        // '@mui/icons-material': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['@mui/icons-material'],
        // },
        // '@mui/lab': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['@mui/lab'],
        // },
        // '@mui/material': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['@mui/material'],
        // },
        // '@mui/x-data-grid': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['@mui/system'],
        // },
        // axios: {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['axios'],
        // },
        // 'axios-mock-adapter': {
        //   singleton: true,
        //   eager: true,
        //   requiredVersion: dependencies['axios-mock-adapter'],
        // },
      },
    })
  );
  config.optimization.runtimeChunk = false;
  config.output = {
    ...config.output,
    uniqueName: 'flow-chart-app',
    publicPath: 'auto',
  };

  return config;
};
