import {
  List,
  makeStyles,
  Theme,
  createStyles,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useEvents } from '../../hooks/useEvents.hook';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      marginLeft: 10,
    },
  })
);

export const EventList: React.FC = () => {
  const classes = useStyles();
  const { events } = useEvents({ isFetch: true });

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Events
      </Typography>
      <div className={classes.root}>
        <List component="nav">
          {events.map((event) => (
            <ListItem key={event._id} button>
              <ListItemText primary={event.title} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
