import { setStorybookConfig } from 'narr-material-ui-common/es6';

const requireContext = require.context('../../src', true, /\.stories\.tsx$/);

setStorybookConfig({
  requireContext,
});