import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import { CreateApplicant } from '../../types/create-aplicant.type';
import { Field } from '../field/field.component';
import { FieldForRender } from '../event-edit-form/fields.interface';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: '10px 50px',
    color: theme.palette.grey[500],
  },
  container: {},
  item: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
  },
  button: {
    margin: 30,
  },
}));

export const RegistrationForm: React.FC = (props) => {
  const classes = useStyles();

  const formik = useFormik<CreateApplicant>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      skype: '',
      country: '',
      city: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const fields = useMemo<{ [key: string]: FieldForRender }>(
    () => ({
      firstName: {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        value: formik.values.firstName,
        onChange: formik.handleChange,
        error: formik.touched.firstName && Boolean(formik.errors.firstName),
        helperText: formik.touched.firstName && formik.errors.firstName,
      },
      lastName: {
        type: 'text',
        name: 'lastName',
        label: 'Last Name',
        value: formik.values.lastName,
        onChange: formik.handleChange,
        error: formik.touched.lastName && Boolean(formik.errors.lastName),
        helperText: formik.touched.lastName && formik.errors.lastName,
      },
      email: {
        type: 'text',
        name: 'email',
        label: 'Email',
        value: formik.values.email,
        onChange: formik.handleChange,
        error: formik.touched.email && Boolean(formik.errors.email),
        helperText: formik.touched.email && formik.errors.email,
      },
      skype: {
        type: 'text',
        name: 'skype',
        label: 'Skype',
        value: formik.values.skype,
        onChange: formik.handleChange,
        error: formik.touched.skype && Boolean(formik.errors.skype),
        helperText: formik.touched.skype && formik.errors.skype,
      },
      country: {
        type: 'text',
        name: 'country',
        label: 'Country',
        value: formik.values.country,
        onChange: formik.handleChange,
        error: formik.touched.country && Boolean(formik.errors.country),
        helperText: formik.touched.country && formik.errors.country,
      },
      city: {
        type: 'text',
        name: 'city',
        label: 'City',
        value: formik.values.city,
        onChange: formik.handleChange,
        error: formik.touched.city && Boolean(formik.errors.city),
        helperText: formik.touched.city && formik.errors.city,
      },
    }),
    [formik]
  );

  return (
    <div>
      <Divider />
      <Typography variant="h6" className={classes.title}>
        Registrations
      </Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          className={classes.container}
        >
          {Object.values(fields).map((field) => (
            <Grid key={field.name} item md={6} className={classes.item}>
              <Field field={field} />
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
