const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  nrwlConfig(config);
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'microFrontendDemo',
      filename: 'remoteEntry.js',
      exposes: {
        // Module
        './Test': './apps/micro-frontend-demo/src/app/test/test',

        // Slice
        './testSlice': './apps/micro-frontend-demo/src/app/test/testSlice',

        // Route
        './routes':
          './apps/micro-frontend-demo/src/app/routing-demo/RoutingDemoConfig',
      },
      shared: {
        // ...dependencies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-router-dom'],
        },
        'react-redux': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-redux'],
        },
      },
    })
  );
  config.optimization.runtimeChunk = false;
  config.output = {
    ...config.output,
    uniqueName: 'micro-frontend-demo',
    publicPath: 'auto',
  };

  return config;
};
