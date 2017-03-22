import React from 'react';
import {shallow} from 'enzyme';

import Logo from './';

describe('Logo component', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<Logo />);
    expect(wrapper.find('Icon')).toBePresent();
  });
});
