import React from 'react';
import Search from './Search';
import ReactRouterDOM from 'react-router-dom';
import { shallow } from 'enzyme';
jest.mock('react-router-dom');

describe('Search', () => {
  var search = shallow(<Search />);

  it('renders properly', () => {
    expect(search.html()).toMatchSnapshot();
  });

  it('has a link', () => {
    expect(ReactRouterDOM.Link.render).toHaveBeenCalled();
  });

  it('contains the navbar', () => {
    expect(search.find('NavigationBar').exists()).toBe(true);
  });

  it('shows results', () => {
    search = shallow(<Search location={{ search: '?q=About' }} />);
    expect(search.find('NavigationBar').children().length).toEqual(1);
  });
});
