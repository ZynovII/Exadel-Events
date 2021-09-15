import {
  Button,
  Divider,
  Grid,
  Link,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { MyBreadcrumbs } from '../components/breadcrumbs/breadcrumbs.coponent';

const useStyles = makeStyles((theme) => ({
  mainFeaturedEvent: {},
  mainFeaturedEventContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: '10px',
  },
}));

const event = {
  id: '1',
  image: 'https://source.unsplash.com/random',
  imageText: 'image',
  title: 'Great Event',
  linkText: 'ksnjglsn',
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Sint dolor fuga reprehenderit accusamus architecto assumenda, dicta laboriosam! 
    Quaerat excepturi ab libero voluptas eaque rerum, dolore dolorem repudiandae? 
    Fugit, fugiat perspiciatis?`,
};

export const EventInfo: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const clickHandlerToEdit = () => {
    history.push(`/event/${event.id}/edit/event-form`);
  };
  const clickHandlerToApplicants = () => {
    history.push(`/applicants/${event.id}`);
  };
  return (
    <>
      <MyBreadcrumbs />
      <Paper className={classes.mainFeaturedEvent}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item md={6}>
            <div className={classes.mainFeaturedEventContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {event.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {event.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {event.linkText}
              </Link>
            </div>
          </Grid>
          <Grid item container xs={2} direction="column">
            <Button
              variant="contained"
              onClick={clickHandlerToEdit}
              className={classes.button}
            >
              {t('navigation.edit')}
            </Button>
            <Button
              variant="contained"
              onClick={clickHandlerToApplicants}
              className={classes.button}
            >
              {t('navigation.applicants')}
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              {event.title}
            </Typography>
            <Divider />
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              nobis nihil similique aliquam error tempora ex praesentium
              reiciendis illum ipsa, libero, labore voluptates vero blanditiis
              aspernatur quam nostrum quod repellat.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                {event.title}
              </Typography>
              <Typography>{event.description}</Typography>
            </Paper>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.sidebarSection}
            >
              Archives
            </Typography>
            sjsb;bhjsbdv
            <Typography
              variant="h6"
              gutterBottom
              className={classes.sidebarSection}
            >
              Social
            </Typography>
            Social Links
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
