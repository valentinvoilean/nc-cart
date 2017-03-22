import React from 'react';
import {shallow} from 'enzyme';

import MainContainer from './';

describe('MainContainer feature', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<MainContainer><div className="test">test</div></MainContainer>);
    expect(wrapper.find('.test')).toBePresent();
  });
});
