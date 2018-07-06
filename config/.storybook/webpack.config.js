const path = require('path');
const commonConfig = require('../../packages/narr-material-ui-common');

const includePath = path.join(__dirname, '../../packages');
const tsconfigPath = path.join(__dirname, '../../tsconfig.json');

module.exports = commonConfig.getStorybookWebpackConfig({
  includePath,
  tsconfigPath,
});
