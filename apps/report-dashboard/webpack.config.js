const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  nrwlConfig(config);
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'reportAndDashboard',
      filename: 'remoteEntry.js',
      exposes: {
        // Module
        './ReportAndDashboard':
          './apps/report-dashboard/src/app/app.tsx',
        
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
