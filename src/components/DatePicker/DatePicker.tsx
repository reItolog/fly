import 'date-fns';
import React, {memo} from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const DatePicker: React.FC<Props> = memo(({handleDateChange}) => {
  return (
    <TextField
      id="date"
      label=" "
      type="date"
      defaultValue="2020-12-12"
      required
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
});

export default DatePicker;
