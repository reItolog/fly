import React from 'react';

import styles from './flyInfoCard.module.scss';

import { Flights } from '../../../../shared/interfaces/flights';

interface Props {
  flyItem: Flights[];
}

const FlyInfoCard: React.FC<Props> = ({ flyItem }) => {
  return (
    <ul className={styles.flyCardInfo}>
      {flyItem.map((item) => {
        return (
          <li key={item.flightNumber}>
            <div className={styles.flyTime}>
              <span> {item.leaving}</span>
              <span>Flight Time: {item.actualFlightTime}</span>
              <span> {item.arriving}</span>
            </div>
            <div className={styles.flyAirCode}>
              <span>{item.originAirportCode}</span>
              <span>{item.destinationAirportCode}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FlyInfoCard;
