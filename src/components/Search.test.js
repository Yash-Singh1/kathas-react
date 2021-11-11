import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
jest.mock('react-router-dom');

Link.render = jest.fn(() => null);

describe('Search', () => {
  let search = shallow(<Search loc={{ search: '' }} />);

  it('renders properly', () => {
    expect(search.html()).toMatchSnapshot();
  });

  it('has a link', () => {
    expect(Link.render).toHaveBeenCalled();
  });

  it('contains the navbar', () => {
    expect(search.find('NavigationBar').exists()).toBe(true);
  });

  it('redirects if no search', () => {
    search = shallow(<Search loc={{ search: '?q=' }} />);
    expect(search.html()).toContain('No results found');
  });

  it('shows results', () => {
    search = shallow(<Search loc={{ search: '?q=About' }} />);
    expect(search.find('NavigationBar').children().length).toEqual(1);
  });

  it('skips </br> when empty', () => {
    search = shallow(<Search loc={{ search: '?q=साई' }} />);
    expect(search.html()).not.toContain('<br/><br/>');
  });
});
