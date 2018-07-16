import { Color } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  // tslint:disable-next-line interface-name
  interface ThemeOptions {
    bootstrap?: {
      color?: Color;
    };
  }
}
