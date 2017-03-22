import React from 'react';
import {shallow} from 'enzyme';

import HeaderBanner from './';

describe('HeaderBanner component', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<HeaderBanner />);
    expect(wrapper.find('Image')).toBePresent();
    expect(wrapper.find('h1')).toBePresent();
  });
});
