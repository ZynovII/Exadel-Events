import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Store } from './storage/context/store.component';

import './i18n/i18n';
import { Layout } from './components/layout/layout.component';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Store>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
