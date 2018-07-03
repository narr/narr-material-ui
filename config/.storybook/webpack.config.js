const path = require('path');
const commonConfig = require('../../packages/narr-material-ui-common');

const includePath = path.resolve(__dirname, '../../packages');
const tsconfigPath = path.resolve(__dirname, '../../tsconfig.json');

module.exports = commonConfig.getStorybookWebpackConfig({
  includePath,
  tsconfigPath,
});
