import { Button, Card, makeStyles, TextField } from '@material-ui/core';
import { Edit, HighlightOff } from '@material-ui/icons';
import React from 'react';

const useStayles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
    padding: '5px',
    backgroundColor: '#dff5e9',
  },
  input: {
    flex: '.9 0 0',
  },
}));

export const EventEditField: React.FC<any> = (props) => {
  const classes = useStayles();
  return (
    <Card className={classes.root}>
      <TextField
        label={props.label}
        id="name"
        {...props}
        className={classes.input}
      />
      <Button>
        <Edit />
      </Button>
      <Button color="secondary">
        <HighlightOff />
      </Button>
    </Card>
  );
};
