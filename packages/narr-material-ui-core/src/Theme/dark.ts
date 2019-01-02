import yellow from '@material-ui/core/colors/yellow';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const darkTheme = createMuiTheme({
  bootstrap: {
    color: yellow,
  },
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

export { darkTheme };
