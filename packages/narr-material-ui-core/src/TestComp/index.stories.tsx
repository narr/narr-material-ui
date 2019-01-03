import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

// Test Build results
// import { TestComp } from 'narr-material-ui-core/dist/TestComp';
import { lightTheme } from '../Theme/light';
import { TestComp } from './index';

storiesOf('Core/TestComp', module)
  .add('default', () => {
    const scope = {
      TestComp,
    };
    const code = `
      <TestComp variant="contained" color="primary">
        Hello Storybook
      </TestComp>
    `;
    return (
      <div
        className="wrapper"
        style={{
          background: '#fff',
          border: '1px solid #eee',
          padding: '20px',
        }}
      >
        <span className="text">Default Look</span>
        <br />
        <br />
        <LiveProvider scope={scope} code={code}>
          <LivePreview />
          <LiveError />
          <br />
          <LiveEditor />
        </LiveProvider>
      </div>
    );
  })
  .add('override CSS and add an animation', () => {
    const noop = () => {
      // tslint:disable-next-line no-console
      console.log('onClick..!!');
    };
    const scope = {
      MuiThemeProvider,
      TestComp,
      lightTheme,
      noop,
      withStyles,
    };
    // This code should be JS not Typescript
    const code = `
      const muiStyles = {
        root: {
          animation: 'my-ani 5s infinite',
        },
        '@keyframes my-ani': {
          from: {
            background: 'red',
          },
          to: {
            background: 'yellow',
          },
        },
      };
      const MyButton = withStyles(muiStyles)(TestComp);
      render(
        <MuiThemeProvider theme={lightTheme}>
          <MyButton onClick={noop}>
            <span role="img" aria-label="so cool">
              😀 😎 👍 💯
            </span>
          </MyButton>
        </MuiThemeProvider>
      );
    `;
    return (
      <div
        className="wrapper"
        style={{ border: '1px solid #eee', padding: '20px' }}
      >
        <span className="text">With Animation</span>
        <br />
        <br />
        <LiveProvider scope={scope} code={code} noInline={true}>
          <LivePreview />
          <LiveError />
          <br />
          <LiveEditor />
        </LiveProvider>
      </div>
    );
  });
