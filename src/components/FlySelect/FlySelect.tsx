import React, { memo } from 'react';

import styles from './flySelect.module.scss';

interface Items {
  value: string;
  title: string;
}

interface Props {
  label: string;
  handleChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  value: string;
  items: Items[];
}

const FlySelect: React.FC<Props> = memo(({ handleChange, label, value, items }) => {
  return (
    <label className={styles.flySelect}>
      {label}
      <select value={value} onChange={handleChange}>
        <option value=''></option>
        {items.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          );
        })}
      </select>
    </label>
  );
});

export default FlySelect;
