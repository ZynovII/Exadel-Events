import {
  Button,
  IconButton,
  Link,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, Route, useHistory } from 'react-router-dom';

import { MyBreadcrumbs } from '../components/breadcrumbs/breadcrumbs.coponent';
import { EventEditField } from '../components/event-edit-field/event-edit-field.component';
import { mainTheme } from '../themes/main-theme';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    padding: '10px',
    borderRadius: '4px',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1300 + theme.spacing(2) * 2)]: {
      width: 1280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  container: {
    marginTop: '10px',
    padding: '5px',
  },
  buttons: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: mainTheme.palette.success.main,
    color: theme.palette.getContrastText(mainTheme.palette.success.dark),
    '&:hover': {
      backgroundColor: mainTheme.palette.success.dark,
    },
  },
}));

export const EventEdit: React.FC = () => {
  const [date, setDate] = useState<MaterialUiPickersDate>(DateTime.now());
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const fields = [
    { label: t('form_fields.title'), num: 1 },
    { num: 2, label: t('form_fields.type') },
    { num: 3, label: t('form_fields.date') },
    { num: 4, label: t('form_fields.description') },
  ];
  console.log(history.location);

  return (
    <main className={classes.layout}>
      <MyBreadcrumbs />
      <Container className={classes.container}>
        <Typography align="center">
          <Link
            variant="button"
            component={RouterLink}
            to={`/event/${'2'}/edit/event-form`}
          >
            Event
          </Link>
          <Link
            variant="button"
            component={RouterLink}
            to={`/event/${'2'}/edit/registration-form`}
          >
            Registration
          </Link>
        </Typography>
        <Route path="/event/:id/edit/event-form">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper className={classes.root}>
                <Typography>{t('form_fields.basic_title')}</Typography>
                <form>
                  {fields.map(({ num, label }) => (
                    <EventEditField key={num} label={label} />
                  ))}
                  <DatePicker
                    variant="inline"
                    label={t('form_fields.date')}
                    value={date}
                    onChange={setDate}
                  />
                </form>
              </Paper>
              <div className={classes.buttons}>
                <Button variant="contained" className={classes.button}>
                  Save
                </Button>
                <Button variant="contained">To draft</Button>
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </div>
            </Grid>
            <Grid item xs={4}>
              <List className={classes.root}>
                {[0, 1, 2, 3].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value} role={undefined} dense button>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={`Line item ${value + 1}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                          <AddCircleOutline />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Route>
        <Route path="/event/:id/edit/registration-form">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper className={classes.root}>
                <Typography>{t('form_fields.basic_title')}</Typography>
                <form>
                  {fields.map(({ num, label }) => (
                    <EventEditField key={num} label={label} />
                  ))}
                  <DatePicker
                    variant="inline"
                    label={t('form_fields.date')}
                    value={date}
                    onChange={setDate}
                  />
                </form>
              </Paper>
              <div className={classes.buttons}>
                <Button variant="contained" className={classes.button}>
                  Save
                </Button>
                <Button variant="contained">To draft</Button>
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </div>
            </Grid>
            <Grid item xs={4}>
              <List className={classes.root}>
                {[0, 1, 2].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value} role={undefined} dense button>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={`Line item ${value + 1}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                          <AddCircleOutline />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Route>
      </Container>
    </main>
  );
};
