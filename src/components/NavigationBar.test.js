import React from 'react';
import NavigationBar from './NavigationBar';
import { shallow } from 'enzyme';

describe('NavigationBar', () => {
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

  it('has state', () => {
    const navbar = shallow(<NavigationBar />);
    expect(navbar.state()).toEqual({
      value: '',
      redirect: false
    });
  });

  describe('and the user wants to search up something', () => {
    it('edits state on change', () => {
      const navbar = shallow(<NavigationBar />);
      navbar
        .find('FormControl')
        .simulate('change', { target: { value: 'abc' } });
      expect(navbar.state().value).toEqual('abc');
    });

    it('redirects if the button is clicked', () => {
      const navbar = shallow(<NavigationBar />);
      navbar.find('Button').simulate('click');
      expect(navbar.state()).toEqual({
        value: '',
        redirect: '/search?q='
      });
    });

    it('redirects if enter is pressed', () => {
      const navbar = shallow(<NavigationBar />);
      navbar.find('FormControl').simulate('keypress', { which: 13 });
      expect(navbar.state()).toEqual({
        value: '',
        redirect: '/search?q='
      });
    });

    it('removes redirect state', () => {
      const navbar = shallow(<NavigationBar />);
      navbar.setState({ redirect: 'stuff' });
      navbar.instance().componentDidUpdate();
      expect(navbar.state().redirect).toEqual(false);
    });

    it('stored the query', () => {
      expect(localStorage.getItem('q')).toEqual('abc');
    });

    describe('with the query remembered', () => {
      it('defaults to empty string', () => {
        localStorage.removeItem('q');
        const navbar = shallow(<NavigationBar />);
        navbar.instance().componentDidMount();
        setTimeout(() => expect(localStorage.getItem('q')).toEqual(''), 0);
      });

      it("doesn't remember if search prop not passed", () => {
        localStorage.setItem('q', 'stuff');
        const navbar = shallow(<NavigationBar />);
        navbar.instance().componentDidMount();
        expect(navbar.state().value).toEqual('');
      });

      it('remembers when search prop is passed', () => {
        localStorage.setItem('q', 'stuff');
        const navbar = shallow(<NavigationBar search />);
        navbar.instance().componentDidMount();
        expect(navbar.state().value).toEqual('stuff');
      });
    });
  });
});
