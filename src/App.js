import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';

import NavBar from './components/Navbar/Navbar';
import Sorting from './containers/Sorting/Sorting';
import LinkedList from './containers/LinkedList/LinkedList';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container style={{ marginTop: '20px' }}>
        <Switch>
          <Route exact path="/" component={Sorting} />
          <Route exact path="/sorting" component={Sorting} />
          <Route exact path="/linkedlist" component={LinkedList} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
