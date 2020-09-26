import React from 'react';
import {Legs} from '../../shared/interfaces/flights';

import FlyInfoCard from './FlyInfoCard/FlyInfoCard';

import styles from './flyCard.module.scss';

interface Props {
  item: Legs
}

const FlyCard: React.FC<Props> = ({item}) => {
  return (
    <li className={styles.cardContainer}>
      <FlyInfoCard
        flyItem={item.itinerary.outFlights}
      />
      <hr/>
      <FlyInfoCard
        flyItem={item.itinerary.inFlights}
      />
    </li>
  );
};

export default FlyCard;