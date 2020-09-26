import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
