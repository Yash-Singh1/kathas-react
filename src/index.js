import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import About from './components/About';
import Search from './components/Search';
import Aarti from './components/Aarti';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/about' component={About} />
      <Route exact path='/search' component={Search} />
      <Route path='/:god/:type' render={Aarti} />
      <Route path='*' render={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
