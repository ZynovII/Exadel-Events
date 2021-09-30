import React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CssBaseline from '@material-ui/core/CssBaseline';
import LuxonUtil from '@date-io/luxon';

import { useMyTheme } from '../../hooks/useMyTheme.hook';
import { darkTheme, lightTheme } from '../../themes/main-theme';
import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';
import { Router } from '../../router/routes';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1300 + theme.spacing(2) * 2)]: {
      width: 1280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const Layout = () => {
  const classes = useStyles();

  const { isDefaultTheme } = useMyTheme();
  let theme = createTheme(isDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);
  return (
    <MuiPickersUtilsProvider utils={LuxonUtil}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <Header />
        </header>
        <main className={classes.layout}>
          <Router />
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};
