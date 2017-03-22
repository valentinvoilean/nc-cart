import React from 'react';
import {shallow} from 'enzyme';

import Footer from './';

describe('Footer feature', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<Footer />);
    expect(wrapper.find('Logo')).toBePresent();
    expect(wrapper.find('footer')).toBePresent();
  });
});
