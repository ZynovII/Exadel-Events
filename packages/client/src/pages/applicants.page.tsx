import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { EventList } from '../components/event-list/event-list.component';
import ApplicantTable from '../components/applicants-table/applicants-table.component';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const Applicants: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <EventList />
          </Grid>
          <Grid item xs={9}>
            <ApplicantTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
