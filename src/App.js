import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Family } from './Dashboard/FamilyUnion';
import { PrefDocuments } from './Dashboard/PrefDocuments';
import logo from './logom.png';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FileCombination } from './Dashboard/FileCombination';
import { CantonChange } from './Dashboard/CantonChange';
import { CampChange } from './Dashboard/CampChange';




function App() {

  return (
    <Router>
        <Container fluid>
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                  <img src={logo} width="60" height="40" className="d-inline-block align-top" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link><Link to="/PrefDocuments">PREF DOCUMENTS</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Col>
          </Row>
          <Row>
            <Col>
                    <Route path='/FamilyUnion' component={Family}/>                   
                    <Route path='/fileCombination' component={FileCombination}/>
                    <Route path='/CantonChange' component={CantonChange}/>
                    <Route path='/CampChange' component={CampChange}/>
                    <Route path='/' exact={true} component={PrefDocuments}/>
                    <Route path='/PrefDocuments' component={PrefDocuments}/>
            </Col>
          </Row>
        </Container>
        <div>
      <p class="copyright">©️ Copyright 2021- Created by Mehmet Sökmen</p>
        </div>
    </Router>
  );
}

export default App;
