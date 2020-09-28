import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

// Store
import { Actions } from '../../../../../store/flights/actions';

import { Filter } from '../../../../../shared/interfaces/flights';

import styles from './flyFilterForm.module.scss';

const FlyFilterForm = memo(() => {
  const dispatch = useDispatch();

  const [filterStops, setFilterStops] = useState<number[]>([2, 3]);
  const [filterAirlines, setFilterAirlines] = useState<string[]>([]);
  const [airLines, setAirLines] = useState<string>('');

  const handleStopsChanges = (event: any, newValue: number | number[]) => {
    setFilterStops(newValue as number[]);
  };

  // TODO: refactoring this func and state
  const handleAirLines = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setAirLines(value);
    setFilterAirlines([value]);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const filterPayload: Filter = {
      filterAirlines,
      filterStops,
    };

    dispatch(Actions.filter(JSON.stringify(filterPayload)));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.filterForm}>
      <div className={styles.filterSlider}>
        <span>stops</span>
        <Slider
          value={filterStops}
          onChange={handleStopsChanges}
          valueLabelDisplay='auto'
          aria-labelledby='range-slider'
          min={1}
          max={4}
        />
      </div>

      <TextField
        onChange={handleAirLines}
        value={airLines}
        id='filterAirlines'
        label='airlines'
        variant='filled'
      />
      <Button size='small' type='submit' color='primary'>
        press
      </Button>
    </form>
  );
});

export default FlyFilterForm;
