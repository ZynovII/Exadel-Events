import { Container, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';

import { MyBreadcrumbs } from '../components/breadcrumbs/breadcrumbs.coponent';
import { EventEditForm } from '../components/event-edit-form/event-edit-form.component';
import { FieldsManager } from '../components/fields-manager/fields-manager.component';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10px',
    padding: '5px',
  },
}));

const indexToRoute = (index: number, url?: string) => {
  switch (index) {
    case 0:
      return `/event/${url}/edit/event-form`;
    case 1:
      return `/event/${url}/edit/registration-form`;
    default:
      return `/event/${url}/edit/event-form`;
  }
};

export const EventEdit: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();
  const params = useParams<{ id?: string }>();

  const handleChange = (_e: React.ChangeEvent<{}>, newValue: number) => {
    history.push(indexToRoute(newValue, params.id));
    setValue(newValue);
  };
  return (
    <>
      <MyBreadcrumbs />
      <Container className={classes.container}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={t('navigation.event_form')} />
          <Tab label={t('navigation.registration_form')} />
        </Tabs>
        <Switch>
          <Route path={`/event/${params.id}/edit/event-form`} exact>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <EventEditForm />
              </Grid>
              <Grid item xs={4}>
                <FieldsManager />
              </Grid>
            </Grid>
          </Route>
          <Route path={`/event/${params.id}/edit/registration-form`} exact>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <EventEditForm />
              </Grid>
              <Grid item xs={4}>
                <FieldsManager />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </Container>
    </>
  );
};
