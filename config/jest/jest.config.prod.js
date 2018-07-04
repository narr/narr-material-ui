const commonConfig = require('../../packages/narr-material-ui-common');

module.exports = commonConfig.getJestConfigProd({
  testRootDir: 'packages',
  collectCoverageFromRootDir: 'packages/**/src',
});
