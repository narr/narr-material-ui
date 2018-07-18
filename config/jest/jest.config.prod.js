const commonConfig = require('../../packages/narr-material-ui-common');

let config;
const target = process.env.JEST_TARGET;
if (target === 'core') {
  config = {
    testRootDir: 'packages/narr-material-ui-core',
    tsConfigFile: './tsconfig.json',
    collectCoverageFromRootDir: 'packages/narr-material-ui-core/src',
    coverageDirectory: './docs/narr-material-ui-core/coverage',
    htmlReporterOutputPath:
      './docs/narr-material-ui-core/test-result/index.html',
  };
}

if (!config) {
  throw new Error('Invalid Jest Build Configuration..!!');
}

module.exports = commonConfig.getJestConfig(config);
