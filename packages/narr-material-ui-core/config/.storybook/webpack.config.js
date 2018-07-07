const path = require('path');
const commonConfig = require('narr-material-ui-common');

const includePath = path.resolve(__dirname, '../../src');

module.exports = commonConfig.getStorybookWebpackConfig({
  includePath,
});
