import React from 'react';
import {shallow} from 'enzyme';

import Icon from './';

describe('Icon component', () => {
  let wrapper, props;

  it('should render', () => {
    props = {
      glyph: '',
      className: 'imageTest'
    };

    wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('.imageTest')).toBePresent();
    expect(wrapper.find('svg')).toBePresent();
  });
});
