const getJestConfig = require('./config/jest/jest.config');
const getJestConfigProd = require('./config/jest/jest.config.prod');
const getStorybookWebpackConfig = require('./config/.storybook/webpack.config');

module.exports = {
  getJestConfig,
  getJestConfigProd,
  getStorybookWebpackConfig,
};
