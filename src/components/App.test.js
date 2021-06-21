import React from 'react';
import App from './App';
import KATHAS from '../data/kathas';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains the navbar', () => {
    expect(app.find('NavigationBar').exists()).toBe(true);
  });

  it('contians the gods', () => {
    expect(app.find('div.card').length).toEqual(KATHAS.length);
  });
});
