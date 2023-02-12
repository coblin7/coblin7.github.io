/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import planetList from './page/planet.js';

function App() {

  ///////////////////////////////////////
  /**
   * return
   */
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Space Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <div className='main-bg' />

      <div className='container'>
        <div className='row'>
          {
            planetList.map( (planet, i)=>{
              return (
                <div className='col-md-4' key={i}><Planet planet={planet} /></div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}


///////////////////////////////////////
/**
 * component
 */
function Planet(props) {
  let planet = props["planet"];
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 content'>
          <img src={planet["img"]} width="80%" />
          <h4>{planet["title"]}</h4>
          <p>{planet["price"]}</p>
        </div>
      </div>
    </div>
    </>
  )
}


export default App;

