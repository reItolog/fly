import { FlightsActionType, Actions, ActionTypes } from './actions';
import { getType } from 'typesafe-actions';
import { LegsState } from './types';

const initialState: LegsState = {
  error: null,
  loading: false,
  legs: null,
  params: {
    origin: '',
    destination: '',
    leaveDate: '',
    numberOfAdults: '',
    numberOfChildren: '',
    page: '1',
  },
};

export function reducer(state = initialState, action: FlightsActionType): LegsState {
  switch (action.type) {
    case getType(Actions.fetchFlightsAsync.request): {
      return {
        ...state,
        loading: true,
        params: Object.assign({}, state.params, {
          ...action.payload,
        }),
      };
    }
    case getType(Actions.fetchFlightsAsync.success): {
      return {
        ...state,
        legs: action.payload,
        loading: false,
      };
    }
    case getType(Actions.fetchFlightsAsync.failure): {
      return {
        ...state,
        loading: false,
        legs: null,
        error: action.payload,
      };
    }
    case ActionTypes.SORT_BY: {
      return Object.assign({}, state, {
        loading: true,
        params: {
          ...state.params,
          sortBy: action.payload,
        },
      });
    }

    default: {
      return state;
    }
  }
}
