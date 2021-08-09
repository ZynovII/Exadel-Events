import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          Hey!
        </Container>
      </main>
    </>
  );
};
