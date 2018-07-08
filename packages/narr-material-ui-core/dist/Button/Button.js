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
import MuiButton from '@material-ui/core/Button';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
var StyledMuiButton = styled(MuiButton)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  && {\n    background: ', ';\n  }\n'],
      ['\n  && {\n    background: ', ';\n  }\n']
    )),
  function(props) {
    return props.bg;
  }
);
// React.SFC is alias of React.StatelessComponent
var Button = function(_a) {
  var children = _a.children,
    onClick = _a.onClick,
    bg = _a.bg;
  return React.createElement(
    StyledMuiButton,
    { onClick: onClick, bg: bg, variant: 'contained' },
    children
  );
};
Button.defaultProps = {
  bg: '#ffa',
};
// This is requried to show wanrings for Props in a compiled js version of this component
Button.propTypes = {
  bg: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
var templateObject_1;
