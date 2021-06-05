import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './containers/Home/Home';
import SortingVisualizer from './containers/SortingVisualizer/SortingVisualizer';
import LinkedListVisualizer from './containers/LinkedListVisualizer/LinkedListVisualizer';
import StackVisualizer from './containers/StackVisualizer/StackVisualizer';
import QueueVisualizer from './containers/QueueVisualizer/QueueVisualizer';
import BinaryTreeVisualizer from './containers/BinaryTreeVisualizer/BinaryTreeVisualizer';
import HeapVisualizer from './containers/HeapVisualizer/HeapVisualizer';
import HashTableVisualizer from './containers/HashTableVisualizer/HashTableVisualizer';
import GraphVisualizer from './containers/GraphVisualizer/GraphVisualizer';

// Utility
import { googleAnalytics } from './utility/utilityFunctions';

declare global {
  interface Window {
    gtag?: (
      key: string,
      trackingId: string,
      config: { page_path: string }
    ) => void;
  }
}

const App = () => {
  googleAnalytics();
  return (
    <Router>
      <NavBar />
      <Container className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sorting" component={SortingVisualizer} />
          <Route exact path="/linkedlist" component={LinkedListVisualizer} />
          <Route exact path="/stack" component={StackVisualizer} />
          <Route exact path="/queue" component={QueueVisualizer} />
          <Route exact path="/binarytree" component={BinaryTreeVisualizer} />
          <Route exact path="/heap" component={HeapVisualizer} />
          <Route exact path="/hashtable" component={HashTableVisualizer} />
          <Route exact path="/graph" component={GraphVisualizer} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
