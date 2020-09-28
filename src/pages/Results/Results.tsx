import React, { memo } from 'react';

import { useSelector } from 'react-redux';

//  Store
import { getFlights, getFlightsLoading } from '../../store/flights/selectors';

import Search from '../../components/Result/Search/Search';
import FlyResults from '../../components/Result/FlyResults/FlyResults';
import Loader from '../../shared/UI/Loader/Loader';

import styles from './results.module.scss';

const Results = memo(() => {
  const flights = useSelector(getFlights);
  const loading = useSelector(getFlightsLoading);

  return (
    <main className='centred'>
      <section className={`flex-centred ${styles.flights}`}>
        <Search />

        {loading && !flights && <Loader />}
        {flights && <FlyResults />}
      </section>
    </main>
  );
});

export default Results;
