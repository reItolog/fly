import { ajax } from 'rxjs/ajax';
import { of, Observable } from 'rxjs';
import queryString from 'query-string';

import config from '../../shared/config/config.json';
import { Params } from '../../shared/interfaces/flights';
import { catchError, map } from 'rxjs/operators';

class FlightsService {
  private baseUrl = config.apiBaseUrl;

  fetchFlights(params: Params): Observable<any> {
    const queryParams = queryString.stringify(params);

    return ajax.getJSON(`${this.baseUrl}/getflights?${queryParams}`).pipe(
      map((flightsResponse: any) => {
        if (!flightsResponse) {
          return [];
        }

        return flightsResponse.legs;
      }),
      catchError((error) => {
        return of(error);
      }),
    );
  }
}

export const flightsService = new FlightsService();
