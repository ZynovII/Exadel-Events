import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  Checkbox,
  FormControlLabel,
  Select,
  TextField,
} from '@material-ui/core';
import { FilterEventDto } from '../../../../common types/dto/event/filter-event.dto';
import { EventService } from '../../http/API/event.service';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    padding: theme.spacing(3),
  },
  search: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  formControl: {
    minWidth: 120,
  },
  button: {},
}));

export const EventFilter = () => {
  const classes = useStyles();
  const [params, setParams] = useState({});

  useEffect(() => {}, []);

  const formik = useFormik<FilterEventDto>({
    initialValues: {
      search: '',
      isOnline: false,
      country: '',
      type: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      EventService.getAllEvents({ page: 1, size: 9, search: 'Minsk' }).then(
        (data) => console.log(data?.data)
      );
    },
  });

  return (
    <div className={classes.searchContainer}>
      <form onSubmit={formik.handleSubmit} className={classes.search}>
        <TextField
          id="search"
          name="search"
          label="Search"
          value={formik.values.search}
          onChange={formik.handleChange}
          error={formik.touched.search && Boolean(formik.errors.search)}
          helperText={formik.touched.search && formik.errors.search}
          className={classes.formControl}
        />
        <Select
          id="type"
          name="type"
          label="Type"
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          className={classes.formControl}
        />
        <Select
          id="country"
          name="country"
          label="Country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          className={classes.formControl}
        />
        <FormControlLabel
          id="isOnline"
          name="isOnline"
          label="Is Online"
          value={formik.values.isOnline}
          onChange={formik.handleChange}
          control={<Checkbox color="primary" />}
          labelPlacement="end"
          className={classes.formControl}
        />
        <Button variant="contained" color="primary" className={classes.button}>
          Search
        </Button>
      </form>
    </div>
  );
};
