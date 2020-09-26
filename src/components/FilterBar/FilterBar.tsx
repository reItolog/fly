import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { Actions } from '../../store/flights/actions';

import filterData from '../../shared/data/filterData.json';
import FlySelect from '../FlySelect/FlySelect';
import { SortBy } from '../../shared/interfaces/flights';

const FilterBar = memo(() => {
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState<string>('');

  const handleSortBy = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.currentTarget.value as SortBy;
    setSortBy(value);

    dispatch(Actions.sortBy(value));
  };

  return (
    <div>
      <FlySelect
        label='sort'
        value={sortBy}
        handleChange={handleSortBy}
        items={filterData.sortBy}
      />
    </div>
  );
});

export default FilterBar;
