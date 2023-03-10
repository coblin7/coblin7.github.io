/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
          <Navbar.Brand href="#home">Space Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' />

      <Routes>
        <Route path="/" element={<div>메인</div>} />
        <Route path="/list" element={
          <>
            <div className='container'>
              <div className='row'>
                {
                  planetList.map((planet, i) => {
                    return (
                      <Planet planet={planet} key={i} />
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/about" element={<div>상세</div>} />
      </Routes>



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
      <div className='col-md-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 content'>
              <img src={planet["img"]} width="80%" />
              <h3><b>{planet["title"]}</b></h3>
              <p>{planet["price"]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;

