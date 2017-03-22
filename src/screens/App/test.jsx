import React from 'react';
import {shallow} from 'enzyme';

import App from './';

describe('App feature', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<App><div className="test">test</div></App>);
    expect(wrapper.find('Header')).toBePresent();
    expect(wrapper.find('MainContainer')).toBePresent();
    expect(wrapper.find('Footer')).toBePresent();
    expect(wrapper.find('.test')).toBePresent();
  });
});
