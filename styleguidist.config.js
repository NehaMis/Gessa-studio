const { version } = require('./package.json');
const webpack = require('webpack');
module.exports = {
  title: 'Gessa',
  components: './apps/container/src/app/pages/projects/comp_test/*.tsx',
  defaultExample: true,
  version,

  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'Components',
      components:
        './apps/container/src/app/pages/projects/components/AddProject.tsx',
      exampleMode: 'collapse',
      usageMode: 'expand',
      sectionDepth: 1,
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
    },
    plugins: [
      new webpack.DefinePlugin({
        process: { env: {} },
      }),
    ],
  },
};
