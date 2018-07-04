const commonConfig = require('../../packages/narr-material-ui-common');

module.exports = commonConfig.getJestConfig({
  testRootDir: 'packages',
  collectCoverageFromRootDir: 'packages/**/src',
});
