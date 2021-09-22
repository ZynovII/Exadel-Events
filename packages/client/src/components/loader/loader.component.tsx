import { CircularProgress, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '70vh',
  },
}));

export const Loader: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.container}
    >
      <CircularProgress />
    </Grid>
  );
};
