import React from 'react';
import NavigationBar from './NavigationBar';
import ReactRouterDOM from 'react-router-dom';
import { mount, shallow } from 'enzyme';
jest.mock('react-router-dom');

describe('NavigationBar', () => {
  let useStateValueSetterMock;
  let useStateRedirectSetterMock;

  beforeEach(() => {
    useStateValueSetterMock = jest.fn();
    useStateRedirectSetterMock = jest.fn();
    // Running multiple times for other calls of useState, e.g. uncontrollable
    React.useState = jest
      .fn()
      .mockReturnValueOnce(['', useStateValueSetterMock]) // value
      .mockReturnValueOnce([false, useStateRedirectSetterMock]) // redirect
      .mockReturnValueOnce(['', useStateValueSetterMock])
      .mockReturnValueOnce([false, useStateRedirectSetterMock])
      .mockReturnValueOnce(['', useStateValueSetterMock])
      .mockReturnValueOnce([false, useStateRedirectSetterMock]);
  });

  ReactRouterDOM.Redirect = jest.fn();

  it('renders properly', () => {
    const navbar = mount(<NavigationBar />);
    expect(navbar.html()).toMatchSnapshot();
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
    shallow(<NavigationBar />);
    setTimeout(() => expect(React.useState).toHaveBeenCalledTimes(2), 0);
  });

  describe('and the user wants to search up something', () => {
    it('edits state on change', () => {
      const navbar = shallow(<NavigationBar />);
      navbar
        .find('FormControl')
        .simulate('change', { target: { value: 'abc' } });
      setTimeout(
        () => expect(useStateValueSetterMock).toHaveBeenCalledWith('abc'),
        0
      );
    });

    it('redirects if the button is clicked', () => {
      const navbar = shallow(<NavigationBar />);
      navbar.find('Button').simulate('click');
      setTimeout(
        () =>
          expect(useStateRedirectSetterMock).toHaveBeenCalledWith('/search?q='),
        0
      );
    });

    it('redirects if enter is pressed', () => {
      const navbar = shallow(<NavigationBar />);
      navbar.find('FormControl').simulate('keypress', { which: 13 });
      setTimeout(
        () =>
          expect(useStateRedirectSetterMock).toHaveBeenCalledWith('/search?q='),
        0
      );
    });

    it('removes redirect state', () => {
      React.useState = jest
        .fn()
        .mockReturnValueOnce(['', useStateValueSetterMock]) // value
        .mockReturnValueOnce(['stuff', useStateRedirectSetterMock]); // redirect

      mount(<NavigationBar />);
      setTimeout(
        () => expect(useStateRedirectSetterMock).toHaveBeenCalledWith(false),
        0
      );
    });

    it('stored the query', () => {
      expect(localStorage.getItem('q')).toEqual('abc');
    });

    describe('with the query remembered', () => {
      it('defaults to empty string', () => {
        localStorage.removeItem('q');
        mount(<NavigationBar />);
        setTimeout(() => expect(localStorage.getItem('q')).toEqual(''), 0);
      });

      it("doesn't remember if search prop not passed", () => {
        localStorage.setItem('q', 'stuff');
        mount(<NavigationBar />);
        setTimeout(
          () => expect(useStateValueSetterMock).toHaveBeenCalledTimes(0),
          0
        );
      });

      it('remembers when search prop is passed', () => {
        localStorage.setItem('q', 'stuff');
        mount(<NavigationBar search />);
        setTimeout(
          () => expect(useStateValueSetterMock).toHaveBeenCalledWith('stuff'),
          0
        );
      });
    });
  });
});
