import { blue } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
  palette: { type: 'light' },
});
export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fc5a8d',
    },
    secondary: {
      main: blue[500],
    },
  },
});
