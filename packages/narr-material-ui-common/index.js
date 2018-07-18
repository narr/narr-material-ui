const prettier = require('./config/.prettierrc');
const getJestConfig = require('./config/jest/jest.config');
const getStorybookWebpackConfig = require('./config/.storybook/webpack.config');

module.exports = {
  prettier,
  getJestConfig,
  getStorybookWebpackConfig,
};
