const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { dependencies } = require('../../package.json');

const _shared = {};
Object.keys(dependencies).forEach((d, i) => {
  _shared[d] = {
    singleton: true,
    eager: true,
    requiredVersion: dependencies[d],
  };
});

module.exports = (config, context) => {
  nrwlConfig(config);
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'GridstackApp',
      filename: 'remoteEntry.js',
      remotes: {
        microFrontendDemo: `microFrontendDemo@//localhost:4203/remoteEntry.js`,
        app2: `app2@//localhost:4203/remoteEntry.js`,
        someRemote: `someRemote@//localhost:4201/remoteEntry.js`,
        flowChartApp: `flowChartApp@//localhost:4201/remoteEntry.js`,
      },
      exposes: {
        // Module
        './someModule': './apps/test-app/src/app/someModule',
        // Slice
        './someSlice': './apps/test-app/src/app/store/someSlice',
        // Route
        './someRoute': './apps/test-app/src/app/routes/someRoute',
      },
      shared: {
        ..._shared,
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
      },
    })
  );
  config.optimization.runtimeChunk = false;
  config.output = {
    ...config.output,
    uniqueName: 'container',
    publicPath: 'auto',
  };

  return config;
};
