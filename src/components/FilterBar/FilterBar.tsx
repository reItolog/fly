import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { Actions } from '../../store/flights/actions';

// MAterial UI
import TextField from '@material-ui/core/TextField';

import filterData from '../../shared/data/filterData.json';
import FlySelect from '../FlySelect/FlySelect';
import { SortBy } from '../../shared/interfaces/flights';

import styles from './filter.module.scss';

const FilterBar = memo(() => {
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState<string>('');
  const [flyKey, setFlyKey] = useState<string>('');

  const handleSortByChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.currentTarget.value as SortBy;
    setSortBy(value);

    dispatch(Actions.sortBy(value));
  };

  const handleFlyKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFlyKey(value);

    // dispatch(Actions.sortBy(value));
  };

  return (
    <div className={styles.filterBar}>
      <FlySelect
        label='sort'
        value={sortBy}
        handleChange={handleSortByChange}
        items={filterData.sortBy}
      />

      <TextField onChange={handleFlyKeyChange} value={flyKey} id='flyKey' label='fly key' />
    </div>
  );
});

export default FilterBar;
