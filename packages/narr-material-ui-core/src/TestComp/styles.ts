import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: ThemeOptions) => {
  let color = 'white';
  if (theme.bootstrap && theme.bootstrap.color) {
    color = theme.bootstrap.color[800];
  }
  return {
    root: {
      color,
    },
  };
};

export { styles };
