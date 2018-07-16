import blue from '@material-ui/core/colors/blue';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const lightTheme = createMuiTheme({
  bootstrap: {
    color: blue,
  },
  palette: {
    type: 'light',
  },
});

export default lightTheme;
