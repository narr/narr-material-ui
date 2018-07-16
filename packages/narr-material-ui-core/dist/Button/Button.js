var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
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
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
var styles = function() {
  return {
    root: {
      color: '#eee',
    },
    wrapper: {
      color: 'blue',
    },
  };
};
var ClassesNesting = function(_a) {
  var className = _a.className,
    classes = _a.classes,
    otherProps = __rest(_a, ['className', 'classes']);
  var muiClasses = _.pickBy(classes, function(item, key) {
    return key !== 'wrapper';
  });
  return (
    // accept global css, className
    React.createElement(
      'div',
      { className: classes.wrapper + ' ' + className },
      React.createElement(
        MuiButton,
        __assign(
          { classes: muiClasses, variant: 'contained', color: 'secondary' },
          otherProps
        )
      )
    )
  );
};
var WithStyleButton = withStyles(styles)(ClassesNesting);
var Button = styled(WithStyleButton)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  && {\n    background: ', ';\n  }\n'],
      ['\n  && {\n    background: ', ';\n  }\n']
    )),
  function(props) {
    return props.bg;
  }
);
Button.propTypes = {
  bg: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  bg: '#ffa',
};
Button.displayName = 'Button';
export default Button;
var templateObject_1;
