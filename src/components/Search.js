import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import textBoundary from '../helpers/textBoundary';
import { Link } from 'react-router-dom';
import pagesAndContent from '../data/text';

class Search extends Component {
  render() {
    const query = decodeURIComponent(
      new URLSearchParams(this.props.location?.search).get('q')
    );

    const filteredResults = pagesAndContent.filter((content) =>
      content.text.includes(query)
    );

    return (
      <NavigationBar search>
        {filteredResults.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredResults.map((pageAndContent, id) => (
            <div key={id} style={{ textAlign: 'left' }}>
              <p>
                <Link to={pageAndContent.path}>{pageAndContent.name}</Link>
              </p>
              <p>
                {pageAndContent.text.split(query).map((v, index) => (
                  <React.Fragment key={index}>
                    {textBoundary(pageAndContent.text, query, index + 1)}
                    <br />
                  </React.Fragment>
                ))}
                {textBoundary(pageAndContent.text, query)}
              </p>
            </div>
          ))
        )}
      </NavigationBar>
    );
  }
}

export default Search;
