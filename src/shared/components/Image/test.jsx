import React from 'react';
import {shallow} from 'enzyme';

import Image from './';

describe('Image component', () => {
  let wrapper, props;

  it('should render', () => {
    props = {
      sources: [{default:'', retina: '', media: ''}],
      alt: '',
      className: 'imageTest'
    };
    wrapper = shallow(<Image {...props} />);
    expect(wrapper.find('.imageTest')).toBePresent();
  });

  it('should render 2 sources', () => {
    props = {
      sources: [{default:'', retina: '', media: ''}, {default:'', retina: '', media: ''}],
      alt: '',
      className: 'imageTest'
    };
    wrapper = shallow(<Image {...props} />);
    expect(wrapper.find('source')).toHaveLength(2);
  });
});
