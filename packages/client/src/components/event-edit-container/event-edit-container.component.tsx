import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EventService } from '../../http/API/event.service';

import { CreateEventDto } from '../../../../common types/dto/event/create-event.dto';
import { EventEditField } from '../event-edit-field/event-edit-field.component';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    padding: '10px',
    borderRadius: '4px',
  },
  fields: {
    borderRadius: '4px',
    border: '1px solid ' + theme.palette.text.disabled,
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
  const formik = useFormik<CreateEventDto>({
    initialValues: {
      title: '',
      description: '',
      startDate: '',
      additionalData: {},
      eventFields: [],
      registrationFields: [],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      EventService.getAllEvents().then((data) =>
        console.log('get all events', data?.data)
      );
    },
  });
  const fields = [
    { label: t('form_fields.title'), num: 1 },
    { num: 2, label: t('form_fields.type') },
    { num: 3, label: t('form_fields.date') },
    { num: 4, label: t('form_fields.description') },
  ];

  return (
    <Paper className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h5">{t('form_fields.basic_title')}</Typography>
        {/* <div>
          {fields.map(({ num, label }) => (
            <EventEditField
              key={num}
              label={label}
              name={'email'}
              value={formik.values['name']}
              onChange={formik.handleChange}
              error={formik.touched['name'] && Boolean(formik.errors['name'])}
              helperText={formik.touched['name'] && formik.errors['name']}
            />
          ))}
        </div> */}
        <div className={classes.fields}>
          <TextField
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            multiline
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <DatePicker
            disableToolbar
            variant="inline"
            id="startDate"
            name="startDate"
            label="Start Date"
            value={formik.values.startDate}
            onChange={(date) => {
              const ISO = date?.toISO();
              formik.setFieldValue('startDate', ISO);
            }}
            error={formik.touched.startDate && Boolean(formik.errors.startDate)}
            helperText={formik.touched.startDate && formik.errors.startDate}
          />
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
