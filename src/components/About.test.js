import React from 'react';
import ReactRouterDOM from 'react-router-dom';
import { shallow } from 'enzyme';
import About from './About';
jest.mock('react-router-dom');

describe('About', () => {
  const about = shallow(<About />);

  it('renders properly', () => {
    expect(about.html()).toMatchSnapshot();
  });

  it('has a link', () => {
    expect(ReactRouterDOM.Link.render).toHaveBeenCalled();
  });
});
