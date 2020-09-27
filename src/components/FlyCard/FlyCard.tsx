import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { Legs } from '../../shared/interfaces/flights';

import FlyInfoCard from './FlyInfoCard/FlyInfoCard';
import parseFlightDate from '../../shared/utils/parseFligthDate';

import styles from './flyCard.module.scss';

interface Props {
  item: Legs;
  keyIndex: number;
}

const FlyCard: React.FC<Props> = memo(({ item, keyIndex }) => {
  const history = useHistory();

  const handlePress = () => {
    console.log(keyIndex);
    history.push(`/checkout/?id=${keyIndex}`);
  };

  return (
    <li className={styles.cardContainer}>
      <div className={styles.flyCardDate}>
        <span>{parseFlightDate(item.itinerary.startDateTime)}</span>
        <span>{parseFlightDate(item.itinerary.endDateTime)}</span>
      </div>
      <FlyInfoCard flyItem={item.itinerary.outFlights} />

      {item.itinerary.inFlights && <FlyInfoCard flyItem={item.itinerary.inFlights} />}
      <Button variant='contained' color='secondary' onClick={handlePress}>
        {item.cost.price} $
      </Button>
    </li>
  );
});

export default FlyCard;
