const path = require('path');
const commonConfig = require('narr-material-ui-common');

const includePath = path.resolve(__dirname, '../../src');
const tsconfigPath = path.resolve(__dirname, '../../tsconfig.json');

module.exports = commonConfig.getStorybookWebpackConfig({
  includePath,
  tsconfigPath,
});
