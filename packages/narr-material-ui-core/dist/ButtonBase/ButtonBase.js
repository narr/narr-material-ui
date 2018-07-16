var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  };
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
var styles = function(theme) {
  var color = 'white';
  if (theme.bootstrap && theme.bootstrap.color) {
    color = theme.bootstrap.color[800];
  }
  return {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: color,
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
var ClassNames = function(_a) {
  var classes = _a.classes,
    otherProps = __rest(_a, ['classes']);
  return React.createElement(
    'button',
    __assign({ type: 'button', className: classes.root }, otherProps)
  );
};
// FIXME: with 'withStyles' Prop Types in Storybook are not correctly generated.
// to provide the theme object to the component as a property, pass { withTheme: true }
// https://material-ui.com/customization/css-in-js/#withstyles-styles-options-higher-order-component
var ButtonBase = withStyles(styles)(ClassNames);
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
