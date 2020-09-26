import { createAsyncAction, ActionType, action } from 'typesafe-actions';

import { SearchPaylod } from '../../shared/interfaces/flights';
import { Legs, SortBy, Params } from '../../shared/interfaces/flights';

export enum ActionTypes {
  SET_PARAMS = 'SET_PARAMS',
  SORT_BY = 'SORT_BY',
  SORT_BY_KEY = 'SORT_BY_KEY',
  SET_PAGE = 'SET_PAGE',

  FETCH_FLIGHTS_REQUEST = 'FETCH_FLIGHTS_REQUEST',
  FETCH_FLIGHTS_SUCCESS = 'FETCH_FLIGHTS_SUCCESS',
  FETCH_FLIGHTS_FAILURE = 'FETCH_FLIGHTS_FAILURE',
  FETCH_FLIGHTS_CANCEL = 'FETCH_FLIGHTS_CANCEL',
}

interface FlightsPayload {
  legs: Legs[];
  totalPages: string;
}

export const Actions = {
  fetchFlightsAsync: createAsyncAction(
    ActionTypes.FETCH_FLIGHTS_REQUEST,
    ActionTypes.FETCH_FLIGHTS_SUCCESS,
    ActionTypes.FETCH_FLIGHTS_FAILURE,
    ActionTypes.FETCH_FLIGHTS_CANCEL,
  )<SearchPaylod, FlightsPayload, Error, string>(),
  setParams: (payload: Params) => action(ActionTypes.SET_PARAMS, payload),
  sortBy: (payload: SortBy) => action(ActionTypes.SORT_BY, payload),
  sortByKey: (payload: string) => action(ActionTypes.SORT_BY_KEY, payload),
  sortPage: (payload: string) => action(ActionTypes.SET_PAGE, payload),
};

export type FlightsActionType = ActionType<typeof Actions>;
