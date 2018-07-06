const path = require('path');
const commonConfig = require('narr-material-ui-common');

const includePath = path.join(__dirname, '../../src');
let tsconfigPath = path.join(
  __dirname,
  '../../node_modules/narr-material-ui-common/config/tsconfig.json'
);
let isRunFromMainPackage = false;
try {
  require(tsconfigPath);
} catch (error) {
  /* eslint-disable no-console */
  console.log('================================');
  console.log('Storybook is run from the main package');
  console.log('================================');
  /* eslint-enable no-console */
  isRunFromMainPackage = true;
}
if (isRunFromMainPackage) {
  tsconfigPath = path.join(__dirname, '../../../../tsconfig.json');
}

module.exports = commonConfig.getStorybookWebpackConfig({
  includePath,
  tsconfigPath,
});
