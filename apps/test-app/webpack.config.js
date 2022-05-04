const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  nrwlConfig(config);
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'testApp',
      filename: 'remoteEntry.js',
      remotes: {
        // someRemote: `someRemote@//localhost:4201/remoteEntry.js`,
      },
      exposes: {
        // Module
        // './someModule': './apps/test-app/src/app/someModule',
        // Slice
        // './someSlice': './apps/test-app/src/app/store/someSlice',
        // Route
        // './someRoute': './apps/test-app/src/app/routes/someRoute',
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
    uniqueName: 'testApp',
    publicPath: 'auto', // <-- Specify the path here.
    clean: true,
  };

  return config;
};
