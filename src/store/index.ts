import { applyMiddleware, createStore, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ActionType, StateType } from 'typesafe-actions';

// Fetch Flights Flow
import { reducer as flightsReducer } from './flights/reducer';
import { epics as flightsEpic } from './flights/epics';
import { FlightsActionType } from './flights/actions';

const rootEpic = combineEpics(
  ...flightsEpic
);

// Epics
const epicMiddleware = createEpicMiddleware();

// Reducers
const reducer = combineReducers({
  flights: flightsReducer
});

export type RootActions = ActionType<FlightsActionType>;

export type AppState = StateType<typeof reducer>;

export default (preloadedState = {}) => {
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
};
