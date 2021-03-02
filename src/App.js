import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import NavBar from './components/Navbar/Navbar';

// Pages
import Sorting from './containers/Sorting/Sorting';
import LinkedListVisualizer from './containers/LinkedListVisualizer/LinkedListVisualizer';
import StackVisualizer from './containers/StackVisualizer/StackVisualizer';
import QueueVisualizer from './containers/QueueVisualizer/QueueVisualizer';
import BinaryTreeVisualizer from './containers/BinaryTreeVisualizer/BinaryTreeVisualizer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container style={{ marginTop: '20px' }}>
        <Switch>
          <Route exact path="/" component={Sorting} />
          <Route exact path="/sorting" component={Sorting} />
          <Route exact path="/linkedlist" component={LinkedListVisualizer} />
          <Route exact path="/stack" component={StackVisualizer} />
          <Route exact path="/queue" component={QueueVisualizer} />
          <Route exact path="/binarytree" component={BinaryTreeVisualizer} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
