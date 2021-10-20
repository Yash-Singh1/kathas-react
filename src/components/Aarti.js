import React from 'react';
import NavigationBar from './NavigationBar';
import KATHAS from '../data/kathas';

function Aarti({ match }) {
  const katha = KATHAS.find((katha) => katha.pathName === match.params.god);
  return (
    <NavigationBar>
      <h1>
        {katha.nameHindi} {match.params.type === 'aarti' ? 'आरती' : 'चालीसा'}
      </h1>
      <br />
      <p>
        {katha[match.params.type].split('\n').map((line, index) => (
          <div key={index}>
            {line}
            <br />
          </div>
        ))}
      </p>
    </NavigationBar>
  );
}

export default Aarti;
