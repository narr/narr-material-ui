import { setStorybookConfig } from '../../packages/narr-material-ui-common/es6';

const requireContext = require.context(
  '../../packages',
  true,
  /\.stories\.tsx$/
);

setStorybookConfig({
  requireContext,
});
