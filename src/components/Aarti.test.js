import React from 'react';
import Aarti from './Aarti';
import KATHAS from '../data/kathas';
import { shallow } from 'enzyme';

describe('Aarti', () => {
  for (const aartiType of ['aarti', 'chalisa']) {
    for (const god of KATHAS.map((katha) => katha.pathName)) {
      const aarti = shallow(
        <Aarti match={{ params: { type: aartiType, god } }} />
      );

      it('renders properly', () => {
        expect(aarti).toMatchSnapshot();
      });

      it('contains the navbar', () => {
        expect(aarti.find('NavigationBar').exists()).toBe(true);
      });
    }
  }
});
