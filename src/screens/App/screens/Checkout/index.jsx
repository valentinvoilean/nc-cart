import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Cart, Products} from './components';

import * as actions from './module';

@connect(
  state => ({...state.products.toJS()}),
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)
export default class Checkout extends React.PureComponent {
  render() {
    return (
      <article>
        <Products {...this.props} />
        <Cart {...this.props} />
      </article>
    );
  }
}
