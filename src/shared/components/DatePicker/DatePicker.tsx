import 'date-fns';
import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  label: string;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
  id: string;
  required?: boolean;
}

const DatePicker: React.FC<Props> = memo(
  ({ handleDateChange, label, defaultValue, id, required = false }) => {
    return (
      <TextField
        id={id}
        label={label}
        type='date'
        defaultValue={defaultValue}
        required={required}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  },
);

export default DatePicker;
