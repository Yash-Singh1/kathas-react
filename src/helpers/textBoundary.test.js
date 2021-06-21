import textBoundary from './textBoundary';
import React from 'react';

it('works', () => {
  expect(
    textBoundary(
      'moreabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcsome',
      'abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedc'
    )
  ).toEqual(
    <>
      ...
      <b>
        abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedc
      </b>
      ...
    </>
  );
  expect(
    textBoundary(
      'moreabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbasome',
      'abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba'
    )
  ).toEqual(
    <>
      ...
      <b>
        cdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedc
      </b>
      ...
    </>
  );
  expect(
    textBoundary(
      'a bunch of stuff where in the center we have the search, or not',
      'search'
    )
  ).toEqual(
    <>
      {'...'}
      bunch of stuff where in the center we have the <b>search</b>, or not
      {'...'}
    </>
  );
  expect(
    textBoundary(
      'a bunch of stuff where in the center we have the search, or not bro sup stuff and weird things and more dudes',
      'search'
    )
  ).toEqual(
    <>
      {'...'}
      bunch of stuff where in the center we have the <b>search</b>, or not bro sup stuff and weird things and mor
      {'...'}
    </>
  );
});
