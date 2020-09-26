import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { Actions } from '../../store/flights/actions';

// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import DatePicker from '../DatePicker/DatePicker';

import { SearchPaylod } from '../../shared/interfaces/flights';

import styles from './search.module.scss';

const Search = memo(() => {
  const dispatch = useDispatch();

  const [payload, setPayload] = useState<SearchPaylod>({
    destination: '',
    numberOfAdults: '1',
    numberOfChildren: '0',
    leaveDate: '',
    origin: '',
    returnDate: '',
  });

  const handleChanges = (key: string, value: string) => {
    setPayload({
      ...payload,
      [key]: value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(Actions.fetchFlightsAsync.request(payload));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleFormSubmit}>
      <div className={styles.searchFormFields}>
        <div className={styles.searchFromTo}>
          {/* <TextField onChange={handleAirport1} id='standard-basic' required label='city' /> */}
          <TextField
            onChange={(e) => handleChanges('origin', e.target.value)}
            id='origin'
            required
            label='origin'
            variant='outlined'
          />
          <TextField
            onChange={(e) => handleChanges('destination', e.target.value)}
            id='destination'
            label='destination'
            variant='outlined'
          />
        </div>
        {/* DATE */}
        <div className={styles.searchDate}>
          <DatePicker handleDateChange={(e) => handleChanges('leaveDate', e.target.value)} />
          <DatePicker handleDateChange={(e) => handleChanges('returnDate', e.target.value)} />
        </div>
        {/* DATE END */}

        <div className={styles.searchPersons}>
          <TextField
            onChange={(e) => handleChanges('numberOfAdults', e.target.value)}
            id='adults'
            type='number'
            required
            label='adults'
            variant='outlined'
          />

          <TextField
            onChange={(e) => handleChanges('numberOfChildren', e.target.value)}
            id='children'
            type='number'
            label='children'
            variant='outlined'
          />
        </div>
      </div>

      <Button type='submit' variant='contained' color='primary'>
        search
      </Button>
    </form>
  );
});

export default Search;
