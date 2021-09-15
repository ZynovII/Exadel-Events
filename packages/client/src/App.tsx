import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CssBaseline from '@material-ui/core/CssBaseline';
import LuxonUtil from '@date-io/luxon';

import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { Router } from './router/routes';
import { Store } from './context/store.component';

import './i18n/i18n';
import { MyBreadcrumbs } from './components/breadcrumbs/breadcrumbs.coponent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
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

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={LuxonUtil}>
        <BrowserRouter>
          <Store>
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
          </Store>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
