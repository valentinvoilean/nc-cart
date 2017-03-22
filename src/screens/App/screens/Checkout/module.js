import {fromJS, Map} from 'immutable';

import * as services from 'shared/utils/services/products';

const initialState = fromJS({
  products: [],
  cartItems: [],
  subtotal: 0,
  vat: 0,
  total: 0
});

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const DEDUCT_ITEM_FROM_CART = 'DEDUCT_ITEM_FROM_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
const CALCULATE_TOTAL = 'CALCULATE_TOTAL';
const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
const ERROR_LOADING_PRODUCTS = 'ERROR_LOADING_PRODUCTS';

/**
 * Reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      return state.set('products', fromJS(action.products));
    }
    case ADD_ITEM_TO_CART: {
      const {id} = action;
      const cartItems = state.get('cartItems');
      const currentCartItem = cartItems.find(cartItem => cartItem.get('id') === id);

      // if the item already exists in the car
      if (currentCartItem) {
        const indexOfItem = state.get('cartItems').findIndex(listItem => listItem.get('id') === id);
        const currentQty = state.getIn(['cartItems', indexOfItem, 'qty']);

        return state
          .set('subtotal', state.get('subtotal') + 10)
          .setIn(['cartItems', indexOfItem, 'qty'], currentQty + 1);
      }

      // if the item doesn't exist in the cartItems
      return state.update('cartItems', (list) => list.push(Map({id, qty: 1})));

    }
    case DEDUCT_ITEM_FROM_CART: {
      const {id} = action;
      const cartItems = state.get('cartItems');
      const currentCartItem = cartItems.find(cartItem => cartItem.get('id') === id);

      // if the item already exists in the cart
      if (currentCartItem) {
        if (currentCartItem.get('qty') > 1) {
          const indexOfItem = state.get('cartItems').findIndex(listItem => listItem.get('id') === id);
          const currentQty = state.getIn(['cartItems', indexOfItem, 'qty']);

          return state.setIn(['cartItems', indexOfItem, 'qty'], currentQty - 1);
        }

        return state.update('cartItems', (list) => list.filter(cartItem => cartItem.get('id') !== id));
      }

      // if the item doesn't exist in the cartItems
      return state;

    }
    case REMOVE_ITEM_FROM_CART: {
      const {id} = action;
      const cartItems = state.get('cartItems');
      const currentCartItem = cartItems.find(cartItem => cartItem.get('id') === id);

      // if the item already exists in the cart
      if (currentCartItem) {
        return state.update('cartItems', (list) => list.filter(cartItem => cartItem.get('id') !== id));
      }

      // if the item doesn't exist in the cartItems
      return state;
    }
    case UPDATE_CART_ITEM: {
      const {itemData:{id, qty}} = action;
      const cartItems = state.get('cartItems');
      const currentCartItem = cartItems.find(cartItem => cartItem.get('id') === id);

      // if the item already exists in the cart
      if (currentCartItem) {
        const indexOfItem = state.get('cartItems').findIndex(listItem => listItem.get('id') === id);
        return state.setIn(['cartItems', indexOfItem, 'qty'], qty);
      }

      // if the item doesn't exist in the cartItems
      return state;
    }
    case CALCULATE_TOTAL: {
      const cartItems = state.get('cartItems');
      let total = 0, subtotal = 0, vat = 0;

      cartItems.map((item) => {
        const id = item.get('id');
        const qty = item.get('qty');
        const index = state.get('products').findIndex(product => product.get('id') === id);

        subtotal += qty * state.getIn(['products', index, 'price']);
        vat = 0.2 * subtotal;
        total = subtotal + vat;
      });

      return state
        .set('total', Math.round(total * 100) / 100)
        .set('subtotal', Math.round(subtotal * 100) / 100)
        .set('vat', Math.round(vat * 100) / 100);
    }
    default: {
      return state;
    }
  }
};

/**
 * Action Creators
 */
export const addItem = id => dispatch => {
  dispatch({type: ADD_ITEM_TO_CART, id});
  dispatch({type: CALCULATE_TOTAL});
};

export const deductItem = id => dispatch => {
  dispatch({type: DEDUCT_ITEM_FROM_CART, id});
  dispatch({type: CALCULATE_TOTAL});
};

export const removeItem = id => dispatch => {
  dispatch({type: REMOVE_ITEM_FROM_CART, id});
  dispatch({type: CALCULATE_TOTAL});
};

export const updateItem = itemData => dispatch => {
  dispatch({type: UPDATE_CART_ITEM, itemData});
  dispatch({type: CALCULATE_TOTAL});
};

export const loadProducts = () => dispatch => {
  dispatch({type: LOADING_PRODUCTS, loading: true});

  services.loadProducts()
    .then(response => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }

      dispatch({type: LOADING_PRODUCTS, loading: false});
      return response.data;
    })
    .then(products => dispatch({type: UPDATE_PRODUCTS, products}))
    .catch((errorMessage) => {
      dispatch({type: ERROR_LOADING_PRODUCTS, message: errorMessage.toString()});
      throw errorMessage;
    });
};
