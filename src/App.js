import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import NavBar from './components/Navbar/Navbar';

// Pages
import Home from './containers/Home/Home';
import Sorting from './containers/Sorting/Sorting';
import LinkedListVisualizer from './containers/LinkedListVisualizer/LinkedListVisualizer';
import StackVisualizer from './containers/StackVisualizer/StackVisualizer';
import QueueVisualizer from './containers/QueueVisualizer/QueueVisualizer';
import BinaryTreeVisualizer from './containers/BinaryTreeVisualizer/BinaryTreeVisualizer';
import HeapVisualizer from './containers/HeapVisualizer/HeapVisualizer';
import HashTableVisualizer from './containers/HashTableVisualizer/HashTableVisualizer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container style={{ marginTop: '20px' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sorting" component={Sorting} />
          <Route exact path="/linkedlist" component={LinkedListVisualizer} />
          <Route exact path="/stack" component={StackVisualizer} />
          <Route exact path="/queue" component={QueueVisualizer} />
          <Route exact path="/binarytree" component={BinaryTreeVisualizer} />
          <Route exact path="/heap" component={HeapVisualizer} />
          <Route exact path="/hashtable" component={HashTableVisualizer} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
