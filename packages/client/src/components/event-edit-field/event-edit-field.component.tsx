import { Card, TextField } from '@material-ui/core';
import { Edit, HighlightOff } from '@material-ui/icons';
import React from 'react';

export const EventEditField: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div>
      <Card>
        <TextField label={label} />
        <HighlightOff />
        <Edit />
      </Card>
    </div>
  );
};
