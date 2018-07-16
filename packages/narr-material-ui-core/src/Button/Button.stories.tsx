import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import myTheme from '../Theme';
import Button from './Button';

storiesOf('Core/Button', module)
  .add('default', () => {
    const scope = { action, Button, color, text };
    const code = `
      <Button className="abcd" onClick={action('Button-clicked')}>
        {text('Label', 'Hello Storybook')}
      </Button>
    `;
    return (
      <div
        className="wrapper"
        style={{ border: '1px solid #eee', padding: '20px' }}
      >
        <LiveProvider scope={scope} code={code}>
          <LiveEditor />
          <br />
          <LiveError />
          <LivePreview />
        </LiveProvider>

        <div className="for-prop-types" style={{ display: 'none' }}>
          <Button onClick={action('')}>&nbsp;</Button>
        </div>
      </div>
    );
  })
  .add('override CSS', () => {
    const noop = () => '';

    const scope = {
      Button,
      MuiThemeProvider,
      myTheme,
      noop,
      withStyles,
    };
    const code = `
      // This code should be JS not Typescript

      const muiStyles = {
        root: {
          padding: '15px',
        },
        wrapper: {
          padding: '15px',
          color: 'purple',
        }
      };
      function ClassesNesting(props) {
        return <Button {...props} />;
      }
      const MyButton = withStyles(muiStyles)(ClassesNesting);

      render(
        <MuiThemeProvider theme={myTheme.dark}>
          <MyButton onClick={noop}>
            <span role="img" aria-label="so cool">
              😀 😎 👍 💯
            </span>
          </MyButton>
        </MuiThemeProvider>
      );
    `;

    return (
      <div className="wrapper" style={{ background: '#444', padding: '20px' }}>
        <LiveProvider scope={scope} code={code} noInline={true}>
          <LiveEditor />
          <br />
          <LiveError />
          <LivePreview />
        </LiveProvider>

        <div className="for-prop-types" style={{ display: 'none' }}>
          <Button onClick={noop}>&nbsp;</Button>
        </div>
      </div>
    );
  });
