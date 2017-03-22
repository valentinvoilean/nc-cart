import React from 'react';
import {shallow} from 'enzyme';

import Checkout from './';

import configureStore from 'config/store/configureStore';

const store = configureStore();

describe('Checkout feature', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow((<Checkout />), {context: {store}}).dive();
    expect(wrapper.find('article')).toBePresent();
    expect(wrapper.find('Cart')).toBePresent();
    expect(wrapper.find('Products')).toBePresent();
  });
});
