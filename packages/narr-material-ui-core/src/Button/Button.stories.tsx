import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

/**
 * Test build files
 *
 * import everything but use only Button
 * import { Button } from '../../dist';
 *
 * import only Button and use it
 * import Button from '../../dist/Button';
 *
 */
import Button from './Button';

storiesOf('Core/Button', module)
  .add('with text', () => {
    const scope = { action, Button, color, text };
    const code = `
      <Button bg={color('color', '#26E9E2')} onClick={action('button-clicked')}>
        {text('Label', 'Hello Storybook')}
      </Button>
    `;
    return (
      <div
        className="wrapper"
        style={{ border: '1px solid #eee', padding: '20px' }}
      >
        <span className="text">Some Info</span>
        <br />
        <br />
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
  .add('with some emoji', () => (
    <div className="wrapper" style={{ background: '#444', padding: '20px' }}>
      <span className="text" style={{ color: '#fff' }}>
        some info
      </span>
      <br />
      <br />
      <Button
        bg={color('color', '#00ffaf')}
        onClick={action('emoji-button-clicked')}
      >
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </div>
  ));
