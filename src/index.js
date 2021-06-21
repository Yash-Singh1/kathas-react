import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import About from './components/About';
import Search from './components/Search';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import KATHAS from './data/kathas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/about' component={About} />
      <Route exact path='/search' component={Search} />
      <Route
        path='/:god/:type'
        render={(props) => {
          const katha = KATHAS.find(
            (katha) => katha.pathName === props.match.params.god
          );
          return (
            <NavigationBar>
              <h1>
                {katha.nameHindi}{' '}
                {props.match.params.type === 'aarti' ? 'आरती' : 'चालीसा'}
              </h1>
              <br />
              <p>
                {katha[props.match.params.type]
                  .split('\n')
                  .map((line, index) => (
                    <div key={index}>
                      {line}
                      <br />
                    </div>
                  ))}
              </p>
            </NavigationBar>
          );
        }}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
