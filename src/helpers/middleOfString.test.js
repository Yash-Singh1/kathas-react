import middleOfString from './middleOfString';

it('works', () => {
  expect(middleOfString('abc', 1)).toEqual('b');
  expect(middleOfString('abc', 2)).toEqual('ab');
});
