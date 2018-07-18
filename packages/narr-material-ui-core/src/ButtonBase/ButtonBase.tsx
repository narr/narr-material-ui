import { withStyles } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import * as PropTypes from 'prop-types';
import * as React from 'react';

interface ClassesProp {
  /** Material UI classes */
  classes: {
    root: string;
  };
}

interface ButtonBaseProps {
  classes?: { [key: string]: any };
  // add a comment below to show it in Prop Types in Storybook
  // but currently it doesn't work well with 'withStyles'
  /** Browser Tooltip  */
  title?: string;
  onClick(): void;
}

const styles = (theme: ThemeOptions) => {
  let color = 'white';
  if (theme.bootstrap && theme.bootstrap.color) {
    color = theme.bootstrap.color[800];
  }
  return {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color,
      cursor: 'pointer',
      height: 48,
      padding: '0 30px',

      '&:hover': {
        color: 'red',
      },

      // increase CSS specificity
      '&&:hover': {
        color: 'black',
      },
    },
  };
};

// React.SFC is alias of React.StatelessComponent
const ClassNames: React.SFC<ClassesProp> = ({ classes, ...otherProps }) => {
  return <button type="button" className={classes.root} {...otherProps} />;
};
// FIXME: with 'withStyles' Prop Types in Storybook are not correctly generated.
// to provide the theme object to the component as a property, pass { withTheme: true }
// https://material-ui.com/customization/css-in-js/#withstyles-styles-options-higher-order-component
const ButtonBase = withStyles(styles)<ButtonBaseProps>(ClassNames);

// This is requried to show wanrings for Props in a compiled js version of this component.
ButtonBase.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ButtonBase.defaultProps = {
  title: 'this is a default browser tooltip',
};

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;

/* istanbul ignore next: test ignore comment */
// tslint:disable-next-line no-empty
function istanbulIgnoreNext() {}

// tslint:disable-next-line no-console
console.log(istanbulIgnoreNext);
