const prettier = require('./config/.prettierrc');
const getJestConfig = require('./config/jest/jest.config');
const getJestConfigProd = require('./config/jest/jest.config.prod');
const getStorybookWebpackConfig = require('./config/.storybook/webpack.config');

module.exports = {
  prettier,
  getJestConfig,
  getJestConfigProd,
  getStorybookWebpackConfig,
};
