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

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            Hello
            <div className='main-bg' />
          </div>
          <div className='col-md-4'>Hello</div>
          <div className='col-md-4'>Hello</div>
        </div>
      </div>

      

    </div>
  );
}





export default App;

