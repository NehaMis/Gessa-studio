const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  nrwlConfig(config);
  config.context = process.cwd();
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        microFrontendDemo: `microFrontendDemo@//localhost:4202/remoteEntry.js`,
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
    uniqueName: 'app2',
    publicPath: 'auto', // <-- Specify the path here.
    clean: true,
  };

  return config;
};
