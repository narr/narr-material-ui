const path = require('path');
const commonConfig = require('narr-material-ui-common');

const includePath = path.resolve(__dirname, '../../src');
let isRunFromMainPackage;
try {
  require('../../node_modules/narr-material-ui-common/config/tsconfig');
  isRunFromMainPackage = false;
} catch (error) {
  /* eslint-disable no-console */
  console.log('================================');
  console.log('Storybook is run from the main package');
  console.log('================================');
  /* eslint-enable no-console */
  isRunFromMainPackage = true;
}

let tsconfigPath;
if (isRunFromMainPackage) {
  tsconfigPath = path.resolve(__dirname, '../../../../tsconfig.json');
} else {
  tsconfigPath = path.resolve(__dirname, '../../tsconfig.json');
}

module.exports = commonConfig.getStorybookWebpackConfig({
  includePath,
  tsconfigPath,
});
