import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loader from '../shared/UI/Loader/Loader';
import Results from '../pages/Results/Results';
const Checkout = React.lazy(() => import('../pages/Checkout/Checkout'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/'>
            <Results />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
