import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const NotFound = () => (
  <NavigationBar>
    <h1>404: Not Found</h1>
    <p>
      The path that you requested was not found. Try going back to the{' '}
      <Link to='/'>homepage</Link>.
    </p>
  </NavigationBar>
);

export default NotFound;
