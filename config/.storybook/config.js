import { setStorybookConfig } from '../../packages/narr-material-ui-common/es6';

const target = process.env.STORYBOOK_TARGET;
let requireContext;
if (target === 'core') {
  requireContext = require.context(
    '../../packages/narr-material-ui-core/src',
    true,
    /\.stories\.tsx$/
  );
} else {
  requireContext = require.context('../../packages', true, /\.stories\.tsx$/);
}

setStorybookConfig({
  requireContext,
});
