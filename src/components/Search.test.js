import React from 'react';
import Search from './Search';
import ReactRouterDOM from 'react-router-dom';
import { shallow } from 'enzyme';
jest.mock('react-router-dom');

describe('Search', () => {
  let search = shallow(<Search />);
  ReactRouterDOM.Redirect = jest.fn(() => null);

  it('renders properly', () => {
    expect(search.html()).toMatchSnapshot();
  });

  it('has a link', () => {
    expect(ReactRouterDOM.Link.render).toHaveBeenCalled();
  });

  it('contains the navbar', () => {
    expect(search.find('NavigationBar').exists()).toBe(true);
  });

  it('redirects if no search', () => {
    search = shallow(<Search location={{ search: '?q=' }} />);
    expect(search.html()).toEqual('');
    expect(ReactRouterDOM.Redirect).toHaveBeenCalled();
  });

  it('shows results', () => {
    search = shallow(<Search location={{ search: '?q=About' }} />);
    expect(search.find('NavigationBar').children().length).toEqual(1);
  });

  it('skips </br> when empty', () => {
    search = shallow(<Search location={{ search: '?q=साई' }} />);
    expect(search.html()).not.toContain('<br/><br/>');
  });
});
