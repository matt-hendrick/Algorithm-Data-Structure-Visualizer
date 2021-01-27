import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import customTheme from './utility/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar/Navbar';
import StackDisplay from './containers/StackDisplay';
import QueueDisplay from './containers/QueueDisplay';
// import BalancingTree from './containers/BalancingTree';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/stack" component={StackDisplay} />
            <Route exact path="/queue" component={QueueDisplay} />
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
