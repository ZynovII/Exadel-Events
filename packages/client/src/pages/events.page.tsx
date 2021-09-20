import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { EventFilter } from '../components/event-filter/event-filter.component';
import { EventCard } from '../components/event-card/event-card.component';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents.hook';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  button: {
    marginBottom: '10px',
  },
}));

export const Events: FC = () => {
  const classes = useStyles();

  const { events } = useEvents({ isFetch: true });

  return (
    <>
      <EventFilter />
      <Container className={classes.cardGrid}>
        <Button
          color="primary"
          className={classes.button}
          component={Link}
          to={`/event/new-event/edit/event-form`}
          size="small"
        >
          Create Event
        </Button>
        <Grid container spacing={4}>
          {events.map((event) => (
            <Grid item key={event._id} xs={12} sm={6} md={4}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
