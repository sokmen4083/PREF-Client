import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Family } from './Dashboard/FamilyUnion';
import { FamilyPdf } from './Dashboard/Family-Pdf';
import { Home } from './Dashboard/Home';
import logo from './logom.png';

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FileCombination } from './Dashboard/FileCombination';




function App() {

  return (
    <Router>
        <Container>
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                  <img src={logo} width="60" height="40" className="d-inline-block align-top" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link><Link to="/home">PREF DOCUMENTS</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Col>
          </Row>
          <Row>
            <Col>
                    <Route path='/FamilyUnion' component={Family}/>
                    <Route path='/Family-Pdf' component={FamilyPdf}/>
                    
                    <Route path='/fileCombination' component={FileCombination}/>
                  
                  <Route path='/' exact={true} component={Home}/>
                  <Route path='/home' component={Home}/>
            </Col>
          </Row>
        </Container>
    </Router>
  );
}

export default App;