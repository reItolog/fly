import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Store
import { getFlights } from '../../store/flights/selectors';

import { Legs } from '../../shared/interfaces/flights';

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
    <div>
      <h1>Checkout</h1>
    </div>
  );
});

export default Checkout;
