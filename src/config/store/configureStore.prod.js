import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}
