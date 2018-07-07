const path = require('path');
const commonConfig = require('../../packages/narr-material-ui-common');

let includePath;
const target = process.env.STORYBOOK_TARGET;
if (target === 'core') {
  includePath = path.join(
    __dirname,
    '../../packages/narr-material-ui-core/src'
  );
} else {
  includePath = path.join(__dirname, '../../packages');
}

module.exports = commonConfig.getStorybookWebpackConfig({
  includePath,
});
