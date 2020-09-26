import React, { memo, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

// Store
import { getFlights, getFlightsError, getFlightsLoading } from '../../store/flights/selectors';

import FlyCard from '../FlyCard/FlyCard';

import FilterBar from '../FilterBar/FilterBar';

import { Legs } from '../../shared/interfaces/flights';

import styles from './flyResults.module.scss';

const FlyResults = memo(() => {
  const flights = useSelector(getFlights);
  // const error = useSelector(getFlightsError);
  const loading = useSelector(getFlightsLoading);

  const [flyResult, setFlyResult] = useState<Legs[]>();

  useEffect(() => {
    if (flights) {
      setFlyResult(flights);
    }
  }, [flights, loading]);

  return (
    <div className={styles.flightsResults}>
      <FilterBar />
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
  );
});

export default FlyResults;
