import React, { memo } from 'react';

// Materila UI
import Paper from '@material-ui/core/Paper';

import { Itinerary } from '../../../shared/interfaces/flights';
import FlyCheckoutInfo from './FlyCheckoutInfo/FlyCheckoutInfo';

import styles from './flyCheckoutCard.module.scss';

interface Props {
  itinerary: Itinerary;
}

const FlyCheckoutCard: React.FC<Props> = memo(({ itinerary }) => {
  return (
    <Paper className={styles.checkoutCard} elevation={3}>
      <div className={styles.checkoutTitle}>
        <div className={styles.origin}>
          <span>City: {itinerary.originGeoname.City}</span>
          <span>Name: {itinerary.originGeoname.Name}</span>
        </div>
        <div className={styles.destination}>
          <span>City: {itinerary.destinationGeoname.City}</span>
          <span>Name: {itinerary.destinationGeoname.Name}</span>
        </div>
      </div>

      <div className={styles.flyInfo}>
        <FlyCheckoutInfo flights={itinerary.outFlights} />
        {itinerary.inFlights && <FlyCheckoutInfo flights={itinerary.inFlights} />}
      </div>
    </Paper>
  );
});

export default FlyCheckoutCard;
