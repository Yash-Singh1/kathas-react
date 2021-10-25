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
      bunch of stuff where in the center we have the <b>search</b>
      {[<React.Fragment key={0}>, or not</React.Fragment>]}
      {''}
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
      bunch of stuff where in the center we have the <b>search</b>
      {[
        <React.Fragment key={0}>
          , or not bro sup stuff and weird things and mor
        </React.Fragment>
      ]}
      {'...'}
    </>
  );
  expect(textBoundary('abcd', 'abcd')).toEqual(
    <>
      {''}
      {''}
      <b>abcd</b>
      {[<React.Fragment key={0}>{''}</React.Fragment>]}
      {''}
    </>
  );
  expect(
    textBoundary(
      'search, or not bro sup stuff and weird things and more dudes 1234555555555555555555666666666667777777777',
      'search'
    )
  ).toEqual(
    <>
      {''}
      {''}
      <b>search</b>
      {[
        <React.Fragment key={0}>
          , or not bro sup stuff and weird things and more dudes
          123455555555555555555566666666666777777
        </React.Fragment>
      ]}
      {'...'}
    </>
  );
  expect(
    textBoundary(
      'searchsearch, or not bro sup stuff and weird things and more dudes 1234555555555555555555666666666667777777777',
      'search'
    )
  ).toEqual(
    <>
      {''}
      {''}
      <b>search</b>
      {[
        <React.Fragment key={0}>{''}</React.Fragment>,
        <React.Fragment key={1}>
          <b>search</b>
        </React.Fragment>,
        <React.Fragment key={2}>
          , or not bro sup stuff and weird things and more dudes
          123455555555555555555566666666666
        </React.Fragment>
      ]}
      {'...'}
    </>
  );
  expect(textBoundary('abcabc', 'abc', 2)).toEqual(<></>);
});
