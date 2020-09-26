import React, { memo, useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Store
import { Actions } from '../../store/flights/actions';
import { getFlights, getFlightsError, getFlightsLoading } from '../../store/flights/selectors';

import DatePicker from '../../components/DatePicker/DatePicker';
import FilterBar from '../../components/FilterBar/FilterBar';
import FlyCard from '../../components/FlyCard/FlyCard';
import { Legs, SearchPaylod } from '../../shared/interfaces/flights';

import styles from './results.module.scss';

const Results = memo(() => {
  const dispatch = useDispatch();
  const flights = useSelector(getFlights);
  const error = useSelector(getFlightsError);
  const loading = useSelector(getFlightsLoading);

  const [flyResult, setFlyResult] = useState<Legs[]>();

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

  useEffect(() => {
    if (flights) {
      // console.log(flights);
      setFlyResult(flights);
    }
  }, [flights, loading]);
  return (
    <main className='centred'>
      <section className={styles.flights}>
        <form className={styles.searchForm} onSubmit={handleFormSubmit}>
          <div className={styles.searchFromTo}>
            {/* <TextField onChange={handleAirport1} id='standard-basic' required label='city' /> */}
            <TextField
              onChange={(e) => handleChanges('origin', e.target.value)}
              id='standard-basic'
              required
              label='city'
            />
            <TextField
              onChange={(e) => handleChanges('destination', e.target.value)}
              id='standard-basic'
              label='city'
            />
          </div>
          {/* DATE */}
          <DatePicker handleDateChange={(e) => handleChanges('leaveDate', e.target.value)} />
          <DatePicker handleDateChange={(e) => handleChanges('returnDate', e.target.value)} />
          {/* DATE END */}
          <TextField
            onChange={(e) => handleChanges('numberOfAdults', e.target.value)}
            id='standard-basic'
            type='number'
            required
            label='adults'
          />

          <TextField
            onChange={(e) => handleChanges('numberOfChildren', e.target.value)}
            id='standard-basic'
            type='number'
            label='children'
          />

          <Button type='submit' variant='contained' color='primary'>
            search
          </Button>
        </form>

        <FilterBar />

        <div className={styles.flightsResults}>
          {!loading ? (
            <ul className={styles.flightsResultsList}>
              {flyResult?.map((item: Legs, index) => {
                return <FlyCard key={index} item={item} />;
              })}
            </ul>
          ) : (
            <div>loading ...</div>
          )}
        </div>
      </section>
    </main>
  );
});

export default Results;
