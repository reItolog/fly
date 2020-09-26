import React, { memo } from 'react';

import { useSelector } from 'react-redux';

//  Store
import { getFlights, getFlightsLoading } from '../../store/flights/selectors';

import Search from '../../components/Search/Search';
import FlyResults from '../../components/FlyResults/FlyResults';
import Loader from '../../shared/UI/Loader/Loader';

import styles from './results.module.scss';

const Results = memo(() => {
  const flights = useSelector(getFlights);
  const loading = useSelector(getFlightsLoading);

  return (
    <main className='centred'>
      <section className={styles.flights}>
        <Search />

        {loading && <Loader />}
        {flights && <FlyResults />}
      </section>
    </main>
  );
});

export default Results;
