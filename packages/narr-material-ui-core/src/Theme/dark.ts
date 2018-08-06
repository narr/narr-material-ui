import yellow from '@material-ui/core/colors/yellow';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const lightTheme = createMuiTheme({
  bootstrap: {
    color: yellow,
  },
  palette: {
    type: 'dark',
  },
});

export default lightTheme;
