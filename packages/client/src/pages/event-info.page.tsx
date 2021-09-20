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
import { useParams } from 'react-router';

import { MyBreadcrumbs } from '../components/breadcrumbs/breadcrumbs.coponent';
import { useEvents } from '../hooks/useEvents.hook';

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

export const EventInfo: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const params = useParams<{ id: string }>();

  const { eventById, isLoading } = useEvents({ id: params.id });

  const clickHandlerToEdit = () => {
    history.push(`/event/${eventById?._id}/edit/event-form`);
  };
  const clickHandlerToApplicants = () => {
    history.push(`/applicants/${eventById?._id}`);
  };

  if (isLoading) return <div>loading...</div>;

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
                {eventById?.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {eventById?.countries.map((country) => (
                  <Typography component={'span'} key={country._id}>
                    {country?.name}
                  </Typography>
                ))}
              </Typography>
              <Link variant="subtitle1" href="#">
                {eventById?.type.name}
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
              {eventById?.categories.map((category) => (
                <Typography key={category._id}>{category?.name}</Typography>
              ))}
            </Typography>
            <Divider />
            <Typography>{eventById?.description}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                Languages
              </Typography>
              {eventById?.languages.map((language) => (
                <Typography key={language._id}>{language?.name}</Typography>
              ))}
            </Paper>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.sidebarSection}
            >
              Archives
            </Typography>
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
