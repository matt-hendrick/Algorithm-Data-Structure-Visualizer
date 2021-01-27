import React from 'react';
import './App.css';

import StackDisplay from './containers/StackDisplay';
import QueueDisplay from './containers/QueueDisplay';
// import BalancingTree from './containers/BalancingTree';

function App() {
  return (
    <div className="AppContainer">
      <StackDisplay />
      <QueueDisplay />
      {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
        <BalancingTree />
      </div> */}
    </div>
  );
}

export default App;
