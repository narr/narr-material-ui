Object.defineProperty(exports, '__esModule', { value: true });
var yellow_1 = require('@material-ui/core/colors/yellow');
var createMuiTheme_1 = require('@material-ui/core/styles/createMuiTheme');
var lightTheme = createMuiTheme_1.default({
  bootstrap: {
    color: yellow_1.default,
  },
  palette: {
    type: 'dark',
  },
});
exports.default = lightTheme;
