const commonConfig = require('../../packages/narr-material-ui-common');

const config = {
  testRootDir: 'packages',
  tsConfigFile: './tsconfig.json',
  collectCoverageFromRootDir: 'packages/**/src',
};

module.exports = commonConfig.getJestConfig(config);
