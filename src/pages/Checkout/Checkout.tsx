import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

//  Material UI
import Button from '@material-ui/core/Button';

// Store
import { getFlights } from '../../store/flights/selectors';

import FlyCheckoutCard from '../../components/FlyCheckoutCard/FlyCheckoutCard';
import { Legs } from '../../shared/interfaces/flights';

import styles from './checkout.module.scss';

const Checkout = memo(() => {
  const location = useLocation();
  const id = Number(location.search.split('=')[1]);

  const [flight, setFlight] = useState<Legs>();

  const flights = useSelector(getFlights);

  useEffect(() => {
    if (flights?.length) {
      setFlight(flights[id]);
    }
  }, [flights, id]);

  useEffect(() => {
    console.log(flight);
  }, [flight]);

  return (
    <main className={`flex-centred ${styles.checkout}`}>
      {flight && <FlyCheckoutCard itinerary={flight.itinerary} />}
      <Button variant='outlined' color='primary'>
        buy {flight?.cost.price} $
      </Button>
    </main>
  );
});

export default Checkout;
