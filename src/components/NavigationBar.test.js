import React from 'react';
import NavigationBar from './NavigationBar';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders properly', () => {
    const navbar = shallow(<NavigationBar />);
    expect(navbar.instance()).toMatchSnapshot();
  });

  it('gives back children', () => {
    const navbar = shallow(
      <NavigationBar>
        <div></div>
      </NavigationBar>
    );
    expect(navbar.find('div').exists()).toBe(true);
  });
});
