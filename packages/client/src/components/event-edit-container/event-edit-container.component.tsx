import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';

import { EventService } from '../../http/API/event.service';
import { CreateEventDto } from '../../../../common types/dto/event/create-event.dto';
import { EventEditField } from '../event-edit-field/event-edit-field.component';
import { useEvents } from '../../hooks/useEvents.hook';
import { FieldForRender } from './fields.interface';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    padding: '10px',
    borderRadius: '4px',
  },
  fields: {
    borderRadius: '4px',
    padding: '5px',
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: '10px',
    },
  },
  buttons: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.getContrastText(theme.palette.success.dark),
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
}));

export const EventEditContainer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const formik = useFormik<Partial<CreateEventDto>>({
    initialValues: {
      title: '',
      description: '',
      startDate: DateTime.now().toISO(),
      endDate: DateTime.now().plus({ days: 1 }).toISO(),
      type: '',
      isOnline: true,
      country: [],
      languages: [],
      categories: [],
      eventFields: [],
      registrationFields: [],
      additionalData: {},
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      EventService.getAllEvents().then((data) =>
        console.log('get all events', data?.data)
      );
    },
  });
  const { fetchOptions, options } = useEvents();

  const fd = useMemo<{ [key: string]: FieldForRender }>(
    () => ({
      title: {
        type: 'text',
        name: 'title',
        label: 'Title',
        value: formik.values.title,
        onChange: formik.handleChange,
        error: formik.touched.title && Boolean(formik.errors.title),
        helperText: formik.touched.title && formik.errors.title,
      },
      description: {
        type: 'text',
        name: 'description',
        label: 'Description',
        multiline: true,
        value: formik.values.description,
        onChange: formik.handleChange,
        error: formik.touched.description && Boolean(formik.errors.description),
        helperText: formik.touched.description && formik.errors.description,
      },
      startDate: {
        type: 'date',
        name: 'startDate',
        label: 'Start Date',
        value: formik.values.startDate,
        onChange: (date: DateTime) => {
          const ISO = date.toISO();
          formik.setFieldValue('startDate', ISO);
        },
      },
      endDate: {
        type: 'date',
        name: 'endDate',
        label: 'End Date',
        value: formik.values.endDate,
        onChange: (date: DateTime) => {
          const ISO = date.toISO();
          formik.setFieldValue('endDate', ISO);
        },
      },
      type: {
        type: 'text',
        name: 'type',
        label: 'Type',
        value: formik.values.type,
        onChange: formik.handleChange,
        error: formik.touched.type && Boolean(formik.errors.type),
      },
      isOnline: {
        type: 'checkbox',
        name: 'isOnline',
        label: 'Is Online',
        value: formik.values.country,
        onChange: formik.handleChange,
      },
      country: {
        type: 'select',
        name: 'country',
        label: 'Country',
        value: formik.values.country,
        onChange: formik.handleChange,
        options: options?.countries,
      },
      languages: {
        type: 'select',
        name: 'language',
        label: 'Lanuage',
        value: formik.values.languages,
        onChange: formik.handleChange,
        options: options?.languages,
      },
      categories: {
        type: 'select',
        name: 'categories',
        label: 'Categories',
        value: formik.values.categories,
        onChange: formik.handleChange,
        options: options?.categories,
      },
    }),
    [options, formik]
  );
  return (
    <Paper className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h5">{t('form_fields.basic_title')}</Typography>
        <div className={classes.fields}>
          {Object.values(fd).map((value) => (
            <EventEditField edit field={value} key={value.name} />
          ))}
        </div>
        <div className={classes.buttons}>
          <Button variant="contained" className={classes.button}>
            {t('form_actions.publish')}
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {t('form_actions.save')}
          </Button>
          <Button variant="contained">{t('form_actions.to_draft')}</Button>
          <Button variant="contained" color="secondary">
            {t('form_actions.cancel')}
          </Button>
        </div>
      </form>
    </Paper>
  );
};
