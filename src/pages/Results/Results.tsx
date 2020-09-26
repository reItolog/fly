import React, { memo } from 'react';

import Search from '../../components/Search/Search';
import FlyResults from '../../components/FlyResults/FlyResults';

import styles from './results.module.scss';

const Results = memo(() => {
  return (
    <main className='centred'>
      <section className={styles.flights}>
        <Search />

        <FlyResults />
      </section>
    </main>
  );
});

export default Results;
