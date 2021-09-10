import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { Edit, HighlightOff } from '@material-ui/icons';
import { DatePicker } from '@material-ui/pickers';
import React from 'react';
import { FieldForRender } from '../event-edit-container/fields.interface';

const useStayles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 5px 0',
    padding: '8px 10px',
  },
  formControl: {
    minWidth: 120,
  },
  input: {
    flex: '1',
    display: 'flex',
  },
  text: { flex: 0.8 },
  btns: {
    justifySelf: 'end',
  },
}));

export const EventEditField: React.FC<{
  field: FieldForRender;
  edit?: boolean;
}> = ({ field, edit }) => {
  const classes = useStayles();
  const getInput = () => {
    switch (field.type) {
      case 'text':
        return (
          <TextField id={field.name} {...field} className={classes.text} />
        );
      case 'date':
        return (
          <DatePicker
            disableToolbar
            variant="inline"
            id={field.name}
            label={field.label}
            value={field.value}
            onChange={field.onChange}
          />
        );
      case 'select':
        return (
          <Select
            id={field.name}
            {...field}
            label={null}
            className={classes.formControl}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {field.options &&
              field.options.map(({ name, _id }) => (
                <MenuItem key={_id} value={_id}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        );
      case 'checkbox':
        return (
          <FormControlLabel
            id={field.name}
            {...field}
            control={<Checkbox color="primary" />}
            labelPlacement="end"
            className={classes.formControl}
          />
        );
      default:
        return (
          <TextField id={field.name} {...field} className={classes.input} />
        );
    }
  };
  if (edit) {
    return (
      <Card className={classes.root}>
        <div className={classes.input}>{getInput()}</div>
        <div className={classes.btns}>
          <Button>
            <Edit />
          </Button>
          <Button color="secondary">
            <HighlightOff />
          </Button>
        </div>
      </Card>
    );
  } else {
    return getInput();
  }
};
