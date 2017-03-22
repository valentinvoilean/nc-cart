import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const middlewares = [
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or
    // between dispatches.
    reduxImmutableStateInvariant(),
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );
}
