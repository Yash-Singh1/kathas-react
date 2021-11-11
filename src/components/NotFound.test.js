import React from 'react';
import { shallow } from 'enzyme';
import { Link, BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

Link.render = jest.fn(() => null);

describe('NotFound', () => {
  const notFound = shallow(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  it('renders properly', () => {
    expect(notFound.html()).toMatchSnapshot();
  });

  it('has a link', () => {
    expect(Link.render).toHaveBeenCalled();
  });
});
