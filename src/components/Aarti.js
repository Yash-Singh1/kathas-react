import React from 'react';
import NavigationBar from './NavigationBar';
import KATHAS from '../data/kathas';
import { useParams } from 'react-router-dom';

function Aarti({ match }) {
  const params = match?.params || useParams();
  const katha = KATHAS.find((katha) => katha.pathName === params.god);
  return (
    <NavigationBar>
      <h1>
        {katha.nameHindi} {params.type === 'aarti' ? 'आरती' : 'चालीसा'}
      </h1>
      <br />
      <p>
        {katha[params.type].split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </NavigationBar>
  );
}

export default Aarti;
