import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import './__mocks__';

import products from 'screens/App/screens/Checkout/module.js';

export default combineReducers({
  products,
  form: formReducer,
  routing: routerReducer
});
