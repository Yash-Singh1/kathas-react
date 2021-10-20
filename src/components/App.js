import React from 'react';
import NavigationBar from './NavigationBar';
import KATHAS from '../data/kathas';
import { Link } from 'react-router-dom';

const App = () => (
  <NavigationBar>
    {KATHAS.map((katha, index) => {
      return (
        <div className='card' key={index}>
          <img className='card-image' src={katha.pic} alt={katha.nameEnglish} />
          <p className='card-text'>
            {katha.nameEnglish} / {katha.nameHindi}
          </p>
          <Link
            className='card-button btn btn-primary'
            style={{
              marginLeft: 10
            }}
            to={`/${katha.pathName}/chalisa`}
          >
            Chalisa
          </Link>
          <Link
            className='card-button btn btn-primary'
            style={{
              marginLeft: 10
            }}
            to={`/${katha.pathName}/aarti`}
          >
            Aarti
          </Link>
        </div>
      );
    })}
  </NavigationBar>
);

export default App;
