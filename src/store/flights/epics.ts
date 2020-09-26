import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';

import { flightsService } from './service';
import { Actions, ActionTypes } from './actions';

const fetchFlightsEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(
      ActionTypes.FETCH_FLIGHTS_REQUEST,
      ActionTypes.SORT_BY,
      ActionTypes.SORT_BY_KEY,
      ActionTypes.SET_PAGE,
    ),
    mergeMap(() => {
      const params = state$.value.flights.params;

      return flightsService.fetchFlights(params).pipe(
        map(({ legs, totalPages }) => {
          return Actions.fetchFlightsAsync.success({ legs, totalPages });
        }),
      );
    }),
    catchError((error) => of(Actions.fetchFlightsAsync.failure(error.message))),
  );

export const epics = [fetchFlightsEpic];
