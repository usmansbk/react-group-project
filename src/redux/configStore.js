import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
  dragons: dragonsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
