import React from 'react';
import middleOfString from './middleOfString';

function textBoundary(text, search, pos = 1) {
  if (search.length === 100) {
    return (
      <>
        ...<b>{search}</b>...
      </>
    );
  } else if (search.length > 100) {
    return (
      <>
        ...<b>{middleOfString(search, 100)}</b>...
      </>
    );
  } else {
    let searchIndex;
    for (let i = 0; i < pos; i++) {
      searchIndex = text.indexOf(search, searchIndex + 1);
    }
    return (
      <>
        ...
        {text.slice(
          searchIndex - Math.floor((100 - search.length) / 2),
          searchIndex
        )}
        <b>{search}</b>
        {text.slice(
          searchIndex + search.length,
          searchIndex + search.length + Math.floor((100 - search.length) / 2) >=
            text.length
            ? undefined
            : Math.floor((100 - search.length) / 2) +
                searchIndex +
                search.length
        )}
        ...
      </>
    );
  }
}

export default textBoundary;
