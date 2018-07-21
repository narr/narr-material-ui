Object.defineProperty(exports, '__esModule', { value: true });
var blue_1 = require('@material-ui/core/colors/blue');
var createMuiTheme_1 = require('@material-ui/core/styles/createMuiTheme');
var lightTheme = createMuiTheme_1.default({
  bootstrap: {
    color: blue_1.default,
  },
  palette: {
    type: 'light',
  },
});
exports.default = lightTheme;
