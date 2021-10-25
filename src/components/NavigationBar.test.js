import React from 'react';
import NavigationBar from './NavigationBar';
import ReactRouterDOM from 'react-router-dom';
import { mount, shallow } from 'enzyme';
jest.mock('react-router-dom');

describe('NavigationBar', () => {
  ReactRouterDOM.Redirect = jest.fn(() => null);

  const props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    onClick: jest.fn(),
    onEnter: jest.fn()
  };
  let navbar = mount(<NavigationBar {...props} />);
  let navbarWithoutProps = mount(<NavigationBar />);

  let btnClicks = 0;

  for (const navbarSelected of [navbar, navbarWithoutProps]) {
    if (navbarSelected === navbar) {
      it('renders properly', () => {
        expect(navbar.html()).toMatchSnapshot();
      });
    }

    it('gives back children', () => {
      const shallowNavbar = shallow(
        <NavigationBar>
          <div></div>
        </NavigationBar>
      );
      expect(shallowNavbar.find('div').exists()).toBe(true);
    });

    describe('and the user wants to search up something', () => {
      it('detects changes', () => {
        navbar
          .find('FormControl')
          .simulate('change', { target: { value: 'abc' } });
        expect(props.onChange).toHaveBeenCalledWith('abc');
      });

      it('redirects if the button is clicked', () => {
        navbar
          .find('FormControl')
          .simulate('change', { target: { value: 'abc' } });
        navbar.find('Button').simulate('click', {});
        expect(props.onClick).toHaveBeenCalledWith(expect.anything(), 'abc');
        btnClicks++;
      });

      it('no redirect if the button is clicked with empty string', () => {
        navbar
          .find('FormControl')
          .simulate('change', { target: { value: '' } });
        navbar.find('Button').simulate('click', {});
        expect(props.onClick).toHaveBeenCalledTimes(btnClicks);
      });

      it("doesn't redirects if enter is pressed with empty string", () => {
        navbar = mount(<NavigationBar {...props} />);
        navbar
          .find('FormControl')
          .simulate('change', { target: { value: '' } })
          .simulate('keypress', { which: 13 });
        if (navbarSelected === navbar) {
          expect(ReactRouterDOM.Redirect).toHaveBeenCalledTimes(1);

          // Just pointing out that it shouldn't be called more than once (meaning that redirect isn't set to false)
          expect(ReactRouterDOM.Redirect).not.toHaveBeenCalledTimes(2);
        }
      });

      it('cancels submit event', () => {
        const preventDefault = jest.fn();
        navbar.find('Form').simulate('submit', { preventDefault });
        expect(preventDefault).toHaveBeenCalled();
      });

      it('redirects if enter is pressed without empty string', () => {
        navbar
          .find('FormControl')
          .simulate('change', { target: { value: 'abc' } })
          .simulate('keypress', { which: 13 });
        expect(props.onEnter).toHaveBeenCalledWith(expect.anything(), 'abc');
      });

      it('stored the query', () => {
        navbar
          .find('FormControl')
          .simulate('change', { target: { value: 'abc' } });
        expect(localStorage.getItem('q')).toEqual('abc');
      });
    });
  }
});
