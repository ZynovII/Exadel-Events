import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    padding: '10px',
    borderRadius: '4px',
  },
}));

export const FieldsManager: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button>
            <ListItemIcon></ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <AddCircleOutline />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <Button variant="outlined">{t('form_actions.add_field')}</Button>
    </List>
  );
};
