const commonConfig = require('../../packages/narr-material-ui-common');

module.exports = commonConfig.getJestConfig({
  testRootDir: 'packages',
  tsConfigFile: './tsconfig.json',
  collectCoverageFromRootDir: 'packages/**/src',
});
