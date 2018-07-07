import { action } from '@storybook/addon-actions';
import { color, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';

storiesOf('Core/Button', module)
  .add('with text', () => {
    // this is comment
    return (
      <div
        className="wrapper"
        style={{ border: '1px solid #eee', padding: '20px' }}
      >
        <span className="text">some info</span>
        <br />
        <br />
        <Button onClick={action('button-clicked')}>
          {text('Label', 'Hello Storybook')}
        </Button>
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
