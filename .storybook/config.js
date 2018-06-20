import { addDecorator, configure } from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

// addon-info
setDefaults({
  inline: true, // Displays info inline vs click button to view
});

addDecorator((story, context) => withInfo()(story)(context));
// this should be placed after withInfo decorator to show Story Source correctly
addDecorator(withKnobs);

const req = require.context('../packages', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
