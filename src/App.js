/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {

 

  ///////////////////////////////////////
  /**
   * return
   */
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}





export default App;

