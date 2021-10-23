import React from 'react';
import { shallow } from 'enzyme';
import ReactRouterDOM from 'react-router-dom';
import NotFound from './NotFound';
jest.mock('react-router-dom');

describe('NotFound', () => {
  const notFound = shallow(<NotFound />);

  it('renders properly', () => {
    expect(notFound.html()).toMatchSnapshot();
  });

  it('has a link', () => {
    expect(ReactRouterDOM.Link.render).toHaveBeenCalled();
  });
});
