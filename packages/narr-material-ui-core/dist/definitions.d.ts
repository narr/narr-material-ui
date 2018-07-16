import { Color } from '@material-ui/core';
declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    bootstrap?: {
      color?: Color;
    };
  }
}
