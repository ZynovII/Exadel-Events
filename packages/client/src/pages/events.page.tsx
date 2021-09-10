import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { EventFilter } from '../components/event-filter/event-filter.component';
import { EventCard } from '../components/event-card/event-card.component';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  button: {
    marginBottom: '10px',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Events: FC = () => {
  const classes = useStyles();
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
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <EventCard id={card.toString()} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
