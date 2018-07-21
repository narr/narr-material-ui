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
Object.defineProperty(exports, '__esModule', { value: true });
var Button_1 = require('@material-ui/core/Button');
var styles_1 = require('@material-ui/core/styles');
var _ = require('lodash');
var PropTypes = require('prop-types');
var React = require('react');
var styled_components_1 = require('styled-components');
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
        Button_1.default,
        __assign(
          { classes: muiClasses, variant: 'contained', color: 'secondary' },
          otherProps
        )
      )
    )
  );
};
var WithStyleButton = styles_1.withStyles(styles)(ClassesNesting);
var Button = styled_components_1.default(WithStyleButton)(
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
exports.default = Button;
var templateObject_1;
