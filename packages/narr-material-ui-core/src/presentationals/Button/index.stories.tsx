import { storiesOf } from '@storybook/react';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Button, ButtonProps } from './index';
// to test the npm module, narr-material-ui-core
// import { Button, ButtonProps } from 'narr-material-ui-core/dist/presentationals/Button';
import { StateWrapper } from '../../shared/storybook/StateWrapper';
import { ReactLiveWrapper } from '../../shared/storybook/ReactLiveWrapper';
import { defaultFont, fallbackFonts } from '../../shared/styles/fonts';
import dogIcon from 'project-root/assets/imgs/test/dog.ico';

const defaultScope = {
  Button,
  makeStyles,
  StateWrapper,
};

function getCode(params: { [k in keyof ButtonProps]: string }) {
  return `
    <Button
      variant={${params.variant}}
      size={${params.size}}>
      ${params.children}
    </Button>
  `;
}

storiesOf('presentationals/Button', module)
  .add('default', () => {
    const code = getCode({
      variant: `'contained'`,
      children: 'button',
    });
    return (
      <ReactLiveWrapper
        title={`button size is 'small' | 'medium' | 'large'`}
        scope={defaultScope}
        code={code}
      />
    );
  })
  .add('child image', () => {
    const code = getCode({
      variant: `'contained'`,
      children: `<img src="${dogIcon}" width="50" height="50" />`,
    });
    return <ReactLiveWrapper scope={defaultScope} code={code} />;
  })
  .add('override styles', () => {
    const code = `
    // This code should be JS not Typescript

    const styles = {
      root: {
        animation: '$my-ani 5s infinite',
      },
      '@keyframes my-ani': {
        from: {
          background: '#6fd9a4',
        },
        to: {
          background: '#e0e0e0',
        },
      },
    };
    const useStyles = makeStyles(styles);

    function Nested(props) {
      const { classes, ...others } = props;
      const newClasses = useStyles(props);
      return (
        <Button classes={newClasses} {...others} />
      );
    }

    render(
      <Nested
        variant={'contained'}>
        override
      </Nested>
    );
    `;
    return (
      <ReactLiveWrapper scope={defaultScope} code={code} noInline={true} />
    );
  })
  .add('override styles2', () => {
    const styles = {
      root: {
        background: 'skyblue',
        fontFamily: `${defaultFont}, ${fallbackFonts}`,
      },
    };
    const useStyles = makeStyles(styles);

    function Nested(props: ButtonProps) {
      const { classes, ...others } = props;
      const newClasses = useStyles(props);
      return <Button classes={newClasses} {...others} />;
    }

    const code = `<Nested variant={'contained'}>override 2</Nested>`;
    return (
      <ReactLiveWrapper
        title={'to check type error when overriding classes'}
        scope={{ ...defaultScope, Nested }}
        code={code}
      />
    );
  })
  .add('onClick', () => {
    const code = `
    <StateWrapper initialState={false}
      onUnmount={() => console.log('onUnmount')}>
      {({ state, setState }) => {
        return (
          <Button variant={'contained'} onClick={() => {
            setState(!state);
          }}>
            {state ? 'off' : 'on'}
          </Button>
        );
      }}
    </StateWrapper>
    `;
    return <ReactLiveWrapper scope={defaultScope} code={code} />;
  });
