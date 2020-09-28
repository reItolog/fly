import React, { memo, useState } from 'react';

//  Material UI
import IconButton from '@material-ui/core/IconButton';
import TuneIcon from '@material-ui/icons/Tune';
import Popover from '@material-ui/core/Popover';

import FlyFilterForm from './FlyFilterForm/FlyFilterForm';

import styles from './flyFilters.module.scss';

const FlyFilter = memo(() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.flyFilters}>
      <IconButton onClick={handleClick}>
        <TuneIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <FlyFilterForm />
      </Popover>
    </div>
  );
});

export default FlyFilter;
