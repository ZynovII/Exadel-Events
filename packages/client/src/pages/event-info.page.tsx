import {
  Button,
  Divider,
  Grid,
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
import { dateToLocalString } from '../utils/dateFormater';
import { Loader } from '../components/loader/loader.component';
import { RegistrationForm } from '../components/registration-form/registration-form.component';

const useStyles = makeStyles((theme) => ({
  mainFeaturedEvent: {
    padding: theme.spacing(1),
    marginBottom: 10,
  },
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
  description: {
    padding: theme.spacing(1),
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

  return (
    <>
      <MyBreadcrumbs />
      <Paper className={classes.mainFeaturedEvent}>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
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
                    {dateToLocalString(eventById?.startDate) +
                      ' - ' +
                      dateToLocalString(eventById?.endDate)}
                  </Typography>
                  {eventById?.categories.map((category) => (
                    <Typography key={category._id}>{category?.name}</Typography>
                  ))}
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
                <Typography variant="h6" gutterBottom></Typography>
                <Divider />
                <Typography className={classes.description}>
                  {eventById?.description}
                </Typography>
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
                  Countries
                </Typography>
                {eventById?.countries.map((country) => (
                  <Typography key={country._id}>{country?.name}</Typography>
                ))}
                {eventById?.isOnline && (
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.sidebarSection}
                  >
                    Online
                  </Typography>
                )}
              </Grid>
            </Grid>
            <RegistrationForm />
          </div>
        )}
      </Paper>
    </>
  );
};
