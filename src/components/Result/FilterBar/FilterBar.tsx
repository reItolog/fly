import React, { useState, memo, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

// Store
import { Actions } from '../../../store/flights/actions';

// MAterial UI
import TextField from '@material-ui/core/TextField';

import filterData from '../../../shared/data/filterData.json';
import FlyFilter from './FlyFilter/FlyFilter';
import FlySelect from '../../../shared/components/FlySelect/FlySelect';
import { SortBy } from '../../../shared/interfaces/flights';

import styles from './filter.module.scss';

const FilterBar = memo(() => {
  const dispatch = useDispatch();

  // TODO: typing
  const refFlyKey = useRef<any>(null);

  const [sortBy, setSortBy] = useState<string>('');
  const [flyKey, setFlyKey] = useState<string>('');

  const handleSortByChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.currentTarget.value as SortBy;
    setSortBy(value);

    dispatch(Actions.sortBy(value));
  };

  useEffect(() => {
    if (refFlyKey) {
      const keyInput$ = fromEvent(refFlyKey.current, 'keyup').pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        pluck('target', 'value'),
      );

      const innputEvent = keyInput$.subscribe((value) => {
        const key = value as string;

        dispatch(Actions.sortByKey(key));
      });

      return () => {
        innputEvent.unsubscribe();
      };
    }
  }, [dispatch]);

  return (
    <div className={styles.filterBar}>
      <FlySelect
        label='sort'
        value={sortBy}
        handleChange={handleSortByChange}
        items={filterData.sortBy}
      />

      <TextField
        ref={refFlyKey}
        onChange={(e) => setFlyKey(e.target.value)}
        value={flyKey}
        id='flyKey'
        label='fly key'
      />

      <FlyFilter />
    </div>
  );
});

export default FilterBar;
