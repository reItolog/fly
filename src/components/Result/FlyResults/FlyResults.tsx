import React, { memo, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

// Store
import { getFlights, getFlightsLoading } from '../../../store/flights/selectors';

import FlyCard from '../FlyCard/FlyCard';
import FlyPagination from '../FlyPagination/FlyPagination';
import FilterBar from '../FilterBar/FilterBar';

import { Legs } from '../../../shared/interfaces/flights';

import styles from './flyResults.module.scss';

const FlyResults = memo(() => {
  const flights = useSelector(getFlights);
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
      <div className={styles.searchResult}>
        <ul
          className={
            !loading ? styles.flightsResultsList : `${styles.flightsResultsList} ${styles.blur}`
          }
        >
          {flyResult?.map((item: Legs, index) => {
            return <FlyCard key={index} item={item} keyIndex={index} />;
          })}
        </ul>
      </div>
      <FlyPagination />
    </div>
  );
});

export default FlyResults;
