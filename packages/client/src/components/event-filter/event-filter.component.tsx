import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { useMemo } from 'react';

import { FilterEventDto } from '../../../../common types/dto/event/filter-event.dto';
import { EventService } from '../../http/API/event.service';
import { useEvents } from '../../hooks/useEvents.hook';
import { FieldForRender } from '../event-edit-container/fields.interface';
import { EventEditField } from '../event-edit-field/event-edit-field.component';

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
  button: {},
}));

export const EventFilter = () => {
  const classes = useStyles();
  const { fetchOptions, options } = useEvents();

  const formik = useFormik<FilterEventDto>({
    initialValues: {
      search: '',
      isOnline: false,
      country: '',
      type: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      EventService.getAllEvents(values).then((data) => console.log(data?.data));
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
          <EventEditField field={value} key={value.name} />
        ))}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
};
