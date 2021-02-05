import React from 'react';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">Algorithm and Structure Visualizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/sorting">Sorting</Nav.Link>
          {/* <Nav.Link href="/stack">Stacks</Nav.Link>
          <Nav.Link href="/queue">Queues</Nav.Link>
          <Nav.Link href="/linkedlist">Linked Lists</Nav.Link>
          <Nav.Link href="/binarysearchtree">Binary Search Trees</Nav.Link>
          <Nav.Link href="/graph">Graphs</Nav.Link>
          <Nav.Link href="/hashmap">Hash Maps</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
