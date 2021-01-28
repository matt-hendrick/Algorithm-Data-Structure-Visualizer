import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import StackDisplay from './containers/StackDisplay';
import QueueDisplay from './containers/QueueDisplay';
// import BalancingTree from './containers/BalancingTree';

function App() {
  return (
    <Router>
      <NavBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <Switch>
          <Route exact path="/stack" component={StackDisplay} />
          <Route exact path="/queue" component={QueueDisplay} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
