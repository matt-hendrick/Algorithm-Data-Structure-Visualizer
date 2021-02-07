import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';

import NavBar from './components/Navbar/Navbar';
import StackDisplay from './containers/StackDisplay';
import QueueDisplay from './containers/QueueDisplay';
import Sorting from './containers/Sorting/Sorting';

function App() {
  return (
    <Router>
      <NavBar />
      <Container style={{ marginTop: '20px' }}>
        <Switch>
          <Route exact path="/" component={Sorting} />
          <Route exact path="/stack" component={StackDisplay} />
          <Route exact path="/queue" component={QueueDisplay} />
          <Route exact path="/sorting" component={Sorting} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
