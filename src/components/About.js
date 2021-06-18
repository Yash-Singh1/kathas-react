import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

class About extends Component {
  render() {
    return (
      <NavigationBar>
        <h1>About</h1>
        <p>
          Kathas is a website based on the original{' '}
          <a href='http://kathas.github.io/'>Kathas</a> that is rewritten in
          React
        </p>
      </NavigationBar>
    );
  }
}

export default About;
