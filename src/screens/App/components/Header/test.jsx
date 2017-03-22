import React from 'react';
import {shallow} from 'enzyme';

import Header from './';

describe('Header feature', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find('Logo')).toBePresent();
    expect(wrapper.find('HeaderBanner')).toBePresent();
  });
});
