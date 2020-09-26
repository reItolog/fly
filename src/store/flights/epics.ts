import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { getType } from 'typesafe-actions';
import { catchError, mergeMap, map, mapTo } from 'rxjs/operators';

import { flightsService } from './service';
import { Actions, ActionTypes } from './actions';

const fetchFlightsEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_FLIGHTS_REQUEST, ActionTypes.SORT_BY),
    mergeMap(() => {
      const params = state$.value.flights.params;

      return flightsService.fetchFlights(params).pipe(
        map((flights) => {
          return Actions.fetchFlightsAsync.success(flights);
        }),
      );
    }),
    catchError((error) => of(Actions.fetchFlightsAsync.failure(error.message))),
  );

const sortByEpic: Epic = (action$, state$) =>
  action$.pipe(ofType(Actions.sortBy), mapTo(getType(Actions.fetchFlightsAsync.request)));

export const epics = [fetchFlightsEpic, sortByEpic];
