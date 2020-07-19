import React from 'react';
import { Dashboard } from './Dashboard/Dashboard';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { default as Profil } from './File/Profil';
import { Family } from './File/FamilyUnion';
import { FamilyPdf } from './File/Family-Pdf';
import { Official } from './File/OfficialDocument';
import { Form } from './File/Form';
import { Home } from './Dashboard/Home';
import { About } from './Dashboard/About';
import { Contact } from './Dashboard/Contact';
import logo from './logom.png';

import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { SıgnIn } from './File/Sİgn-In';
import { FileCombination } from './File/FileCombination';
import { Jobs } from './File/Job';
import { Course } from './File/Course';
import { Social } from './File/SocialLife';



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
                      <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                      <Nav.Link><Link to="/about">About</Link></Nav.Link>
                      <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                      <NavDropdown title="My Pref" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to="/officialDocument">Official Documents</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/job">Job Opportunuties</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/course">Course Opportunuties</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/socialLife">Social Life</Link></NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="#login">Mark Otto</a> | <a href="#login">Sign out</a>
                </Navbar.Text>
                <Navbar.Text>
                  <a href="/Sign-In">Sign in</a> | <a href="/Form">Register</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
            </Col>
          </Row>
          <Row>
            <Col>
                  <Security issuer='https://dev-516899.okta.com/oauth2/default'
                          clientId='0oajr54xsSO4dG5dc4x6'
                          redirectUri={window.location.origin + '/callback'}
                          pkce={true}>
                  <SecureRoute path='/' exact={true} component={Dashboard}/>
                  <Route path='/callback' component={LoginCallback}/>
                  <Route path='/form' component={Form}/>
                  <Route path='/profil' component={Profil}/>
                  <Route path='/FamilyUnion' component={Family}/>
                  <Route path='/Family-Pdf' component={FamilyPdf}/>
                  <Route path='/officialDocument' component={Official}/>
                  <Route path='/home' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
                  <Route path='/sign-in' component={SıgnIn}/>
                  <Route path='/fileCombination' component={FileCombination}/>
                  <Route path='/Job' component={Jobs}/>
                  <Route path='/Course' component={Course}/>
                  <Route path='/SocialLife' component={Social}/>
                </Security>
            </Col>
          </Row>
        </Container>
    </Router>
  );
}

export default App;