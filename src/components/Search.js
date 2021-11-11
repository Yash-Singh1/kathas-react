import React from 'react';
import NavigationBar from './NavigationBar';
import textBoundary from '../helpers/textBoundary';
import { Link, useLocation } from 'react-router-dom';
import pagesAndContent from '../data/text';

function Search({ loc }) {
  const query = decodeURIComponent(
    new URLSearchParams((loc || useLocation()).search).get('q')
  );

  const filteredResults = pagesAndContent.filter((content) =>
    content.text.includes(query)
  );

  return (
    <NavigationBar search>
      {filteredResults.length === 0 || query.trim() === '' ? (
        <p>No results found</p>
      ) : (
        filteredResults.map((pageAndContent, id) => (
          <div key={id} style={{ textAlign: 'left' }}>
            <p>
              <Link to={pageAndContent.path}>{pageAndContent.name}</Link>
            </p>
            <p>
              {pageAndContent.text
                .split(query)
                .slice(0, -1)
                .map((_value, index) =>
                  textBoundary(pageAndContent.text, query, index + 1)
                )
                .map((result, index) => (
                  <React.Fragment key={index}>
                    {result}
                    {result.props.children ? <br /> : null}
                  </React.Fragment>
                ))}
            </p>
          </div>
        ))
      )}
    </NavigationBar>
  );
}

export default Search;
