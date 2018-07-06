const commonConfig = require('../../packages/narr-material-ui-common');

module.exports = commonConfig.getJestConfigProd({
  testRootDir: 'packages/narr-material-ui-core',
  collectCoverageFromRootDir: 'packages/narr-material-ui-core/src',
  coverageDirectory: './docs/narr-material-ui-core/coverage',
  htmlReporterOutputPath: './docs/narr-material-ui-core/test-result/index.html',
});
