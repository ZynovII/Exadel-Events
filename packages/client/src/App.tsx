import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CssBaseline from '@material-ui/core/CssBaseline';
import LuxonUtil from '@date-io/luxon';

import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { Router } from './routes';

import './i18n/i18n';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={LuxonUtil}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
