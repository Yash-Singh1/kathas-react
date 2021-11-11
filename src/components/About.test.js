import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import About from './About';

Link.render = jest.fn(() => null);

describe('About', () => {
  const about = shallow(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );

  it('renders properly', () => {
    expect(about.html()).toMatchSnapshot();
  });

  it('has a link', () => {
    expect(Link.render).toHaveBeenCalled();
  });
});
