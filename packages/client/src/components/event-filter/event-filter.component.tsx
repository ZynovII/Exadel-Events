import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { useMemo } from 'react';

import { FilterEventDto } from '../../../../common types/dto/event/filter-event.dto';
import { FieldForRender } from '../event-edit-form/fields.interface';
import { Field } from '../field/field.component';
import { useDropdownOptions } from '../../hooks/useDropdownOptions';
import { useEvents } from '../../hooks/useEvents.hook';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    padding: theme.spacing(3),
  },
  search: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  formControl: {
    minWidth: 120,
  },
}));

export const EventFilter = () => {
  const classes = useStyles();
  const { options } = useDropdownOptions();
  const { fetchEvents } = useEvents();

  const formik = useFormik<FilterEventDto>({
    initialValues: {
      search: '',
      isOnline: false,
      country: '',
      type: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      fetchEvents(values);
    },
  });

  const fields = useMemo<{ [key: string]: FieldForRender }>(
    () => ({
      search: {
        type: 'text',
        name: 'search',
        label: 'Search',
        value: formik.values.search,
        onChange: formik.handleChange,
        error: formik.touched.search && Boolean(formik.errors.search),
        helperText: formik.touched.search && formik.errors.search,
        className: classes.formControl,
      },
      type: {
        type: 'select',
        name: 'type',
        label: 'Type',
        value: formik.values.type,
        onChange: formik.handleChange,
        error: formik.touched.type && Boolean(formik.errors.type),
        className: classes.formControl,
        options: options.types,
      },
      country: {
        type: 'select',
        name: 'country',
        label: 'Country',
        value: formik.values.country,
        onChange: formik.handleChange,
        error: formik.touched.country && Boolean(formik.errors.country),
        className: classes.formControl,
        options: options.countries,
      },
      isOnline: {
        type: 'checkbox',
        name: 'isOnline',
        label: 'Is Online',
        value: formik.values.isOnline,
        onChange: formik.handleChange,
        className: classes.formControl,
      },
    }),
    [formik, options, classes]
  );

  return (
    <div className={classes.searchContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.search}>
        {Object.values(fields).map((value) => (
          <Field field={value} key={value.name} />
        ))}
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};
