const path = require('path');
const _ = require('lodash');
const prettierBaseConfig = require('../.prettierrc');
const prettierConfig = _.assign({}, prettierBaseConfig, {
  parser: 'typescript',
});
const defaultTsconfigPath = path.join(__dirname, '../tsconfig.json');

module.exports = ({ includePath, tsconfigPath = defaultTsconfigPath } = {}) => {
  return (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.

    // For example, add typescript loader:
    defaultConfig.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        include: includePath,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: tsconfigPath,
            },
          },
          require.resolve('react-docgen-typescript-loader'),
        ],
      },
      {
        test: /\.stories\.tsx?$/,
        include: includePath,
        use: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig,
            },
          },
        ],
        enforce: 'pre',
      }
    );
    defaultConfig.resolve.extensions.push('.ts', '.tsx');

    return defaultConfig;
  };
};
