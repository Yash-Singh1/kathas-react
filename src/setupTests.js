import { configure } from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

/**
 * Brought from {@link https://github.com/facebook/jest/issues/2098#issuecomment-260733457}
 */
var localStorageMock = (function () {
  var store = {};

  return {
    removeItem: function (key) {
      store[key] = null;
    },
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});
