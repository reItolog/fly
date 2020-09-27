import { createSelector } from 'reselect';
import { AppState } from '../index';

export const flightsState = (state: AppState) => state.flights;

export const getFlights = createSelector(flightsState, (state) => state.legs);

export const getFlightsLoading = createSelector(flightsState, (state) => state.loading);

export const getTotalPages = createSelector(flightsState, (state) => state.totalPages);

export const getFlightsError = createSelector(flightsState, (state) => state.error);
