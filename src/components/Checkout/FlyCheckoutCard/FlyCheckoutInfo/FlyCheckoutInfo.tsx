import React, { memo } from 'react';

import { Flights } from '../../../../shared/interfaces/flights';
import parseFligthDate from '../../../../shared/utils/parseFligthDate';

import styles from './flyCheckoutInfo.module.scss';

interface Props {
  flights: Flights[];
}

const FlyCheckoutInfo: React.FC<Props> = memo(({ flights }) => {
  return (
    <ul className={styles.checkoutInfo}>
      {flights.map((item: Flights, index) => {
        return (
          <li key={index} className={styles.checkoutInfoItem}>
            <div className={styles.airCode}>
              <span>{item.originAirportCode}</span>
              <span>{item.destinationAirportCode}</span>
            </div>
            <div className={styles.checkoutInfoDate}>
              <div className={styles.datetime}>
                <span>{parseFligthDate(item.arriveDateTime)}</span>
                <span>{item.leaving}</span>
              </div>
              <span>{item.actualFlightTime}</span>
              <div className={styles.datetime}>
                <span>{parseFligthDate(item.departDateTime)}</span>
                <span>{item.arriving}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
});

export default FlyCheckoutInfo;
