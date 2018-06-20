import { addDecorator, configure } from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

// addon-info
setDefaults({
  inline: true, // Displays info inline vs click button to view
});

addDecorator((story, context) => withInfo()(story)(context));
addDecorator(withKnobs);

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
