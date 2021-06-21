import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  var search = shallow(<Search />);

  it('renders properly', () => {
    expect(search.instance()).toMatchSnapshot();
  });

  it('contains the navbar', () => {
    expect(search.find('NavigationBar').exists()).toBe(true);
  });

  it('shows results', () => {
    search = shallow(<Search location={{ search: '?q=About' }} />);
    expect(search.find('NavigationBar').children().length).toEqual(1);
  });
});
