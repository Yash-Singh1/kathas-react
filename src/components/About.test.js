import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  const about = shallow(<About />);

  it('renders properly', () => {
    expect(about.instance()).toMatchSnapshot();
  });
});
