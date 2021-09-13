import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';

import { CreateEventDto } from '../../../../common types/dto/event/create-event.dto';
import { EventEditField } from '../event-edit-field/event-edit-field.component';
import { FieldForRender } from './fields.interface';
import { useDropdownOptions } from '../../hooks/useDropdownOptions';
import { Thumb } from './file-render.component';

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
  const formik = useFormik<Partial<CreateEventDto> & { image?: any }>({
    initialValues: {
      title: '',
      description: '',
      startDate: DateTime.now().toISO(),
      endDate: DateTime.now().plus({ days: 1 }).toISO(),
      type: '',
      isOnline: false,
      country: [],
      languages: [],
      categories: [],
      image: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { options } = useDropdownOptions();

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
        type: 'select',
        name: 'type',
        label: 'Type',
        value: formik.values.type,
        onChange: formik.handleChange,
        options: options.types,
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
        multiple: true,
        value: formik.values.country,
        onChange: formik.handleChange,
        options: options?.countries,
      },
      languages: {
        type: 'select',
        name: 'languages',
        label: 'Lanuage',
        multiple: true,
        value: formik.values.languages,
        onChange: formik.handleChange,
        options: options?.languages,
      },
      categories: {
        type: 'select',
        name: 'categories',
        label: 'Categories',
        multiple: true,
        value: formik.values.categories,
        onChange: formik.handleChange,
        options: options?.categories,
      },
      image: {
        type: 'file',
        name: 'image',
        label: 'Image',
        value: undefined,
        onChange: (event) => {
          formik.setFieldValue('image', event.currentTarget.files[0]);
        },
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
          <Thumb file={formik.values.image} />
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
