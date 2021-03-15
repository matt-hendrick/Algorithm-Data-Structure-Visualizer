import React from 'react';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        Algorithm and Data Structure Visualizer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Algorithms" id="basic-nav-dropdown">
            <NavDropdown.Item href="/sorting">Sorting</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Data Structures" id="basic-nav-dropdown">
            <NavDropdown.Item href="/linkedlist">Linked List</NavDropdown.Item>
            <NavDropdown.Item href="/stack">Stack</NavDropdown.Item>
            <NavDropdown.Item href="/queue">Queue</NavDropdown.Item>
            <NavDropdown.Item href="/binarytree">Binary Tree</NavDropdown.Item>
            <NavDropdown.Item href="/heap">Heap</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
