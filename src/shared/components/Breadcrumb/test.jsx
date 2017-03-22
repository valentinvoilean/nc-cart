import React from 'react';
import {shallow} from 'enzyme';

import Breadcrumb from './';

describe('Breadcrumb component', () => {
  let wrapper;

  it('should render', () => {
    wrapper = shallow(<Breadcrumb />);
    expect(wrapper.find('Breadcrumbs')).toBePresent();
  });
});
