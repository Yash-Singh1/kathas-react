import React from 'react';
import middleOfString from './middleOfString';

function textBoundary(text, search, pos = 1) {
  if (search.length === 100) {
    return (
      <>
        ...<b>{search}</b>...
        {/* Show the search itself if 100 in length */}
      </>
    );
  } else if (search.length > 100) {
    return (
      <>
        ...<b>{middleOfString(search, 100)}</b>...
        {/* Show the middle of the serach if greater than 100 in length */}
      </>
    );
  } else {
    let searchIndex = -1;
    for (let i = 0; i < pos; i++) {
      searchIndex = text.indexOf(search, searchIndex + 1); // Locate the index of the search match
    }

    const boundaryAmount = Math.floor((100 - search.length) / 2);
    const beforeMatch = text.slice(
      searchIndex - boundaryAmount < 0 ? 0 : searchIndex - boundaryAmount,
      searchIndex
    );
    let afterMatch = text.slice(
      searchIndex + search.length,
      searchIndex + search.length >= text.length
        ? undefined
        : boundaryAmount +
            boundaryAmount -
            beforeMatch.length +
            searchIndex +
            search.length
    );

    if (beforeMatch.includes(search)) {
      return <></>;
    }

    afterMatch = afterMatch
      .split(search)
      .reduce((accumalator, searchPart, searchPartIndex, searchParts) => {
        accumalator.push(
          <React.Fragment key={accumalator.length}>{searchPart}</React.Fragment>
        );
        if (searchPartIndex !== searchParts.length - 1) {
          accumalator.push(
            <React.Fragment key={accumalator.length}>
              <b>{search}</b>
            </React.Fragment>
          );
        }
        return accumalator;
      }, []);

    return (
      <>
        {/* Check if a ... is needed at beginning */}
        {searchIndex - boundaryAmount < 0 ? '' : '...'}
        {beforeMatch}
        {/* Search in bold (font size increased in CSS) */}
        <b>{search}</b>
        {afterMatch}
        {/* Check if a ... is needed at end */}
        {searchIndex + search.length + boundaryAmount >= text.length
          ? ''
          : '...'}
      </>
    );
  }
}

export default textBoundary;
