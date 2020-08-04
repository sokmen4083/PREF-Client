import React from 'react';
import { Dashboard } from './Dashboard/Dashboard';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { default as Profil } from './File/Profil';
import { Family } from './File/FamilyUnion';
import { default as FamilyPdf } from './File/Family-Pdf';
import { Official } from './File/OfficialDocument';
import { RegisterForm } from './File/Form';
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

import UserService from './service/UserService'


function Register(){
  return (
    <>
      <Link to="/Signin">Sign in</Link> | <Link to="/Register">Register</Link>
    </>
  )
}

function SignOut(){
  return (
    <>
      <Link to="/Profil">?</Link> | <Link to="/home">Sign out</Link>
    </>
  )
}

function AuthenticationHeader(){
  let user = UserService.getCurrentUser();

  return (
    <Nav.Link>
      {user ? <SignOut/> : <Register/>}
    </Nav.Link>
  );
}

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
                        <NavDropdown.Item><Link to="/protected/officialDocument">Official Documents</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/protected/job">Job Opportunuties</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/protected/course">Course Opportunuties</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/protected/socialLife">Social Life</Link></NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                  <AuthenticationHeader/>
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
                    <Route path='/callback' component={LoginCallback}/>
                    <SecureRoute path='/protected' component={Dashboard}/>
                    <Route path='/protected/profil' component={Profil}/>
                    <Route path='/protected/FamilyUnion' component={Family}/>
                    <Route path='/protected/Family-Pdf' component={FamilyPdf}/>
                    <Route path='/protected/officialDocument' component={Official}/>
                    
                    <Route path='/protected/fileCombination' component={FileCombination}/>
                    <Route path='/protected/Job' component={Jobs}/>
                    <Route path='/protected/Course' component={Course}/>
                    <Route path='/protected/SocialLife' component={Social}/>
                    <Route path='/protected/form' component={RegisterForm}/>
                  </Security>
                  
                  <Route path='/' exact={true} component={Home}/>
                  <Route path='/home' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
                  <Route path='/sign-in' component={SıgnIn}/>
            </Col>
          </Row>
        </Container>
    </Router>
  );
}

export default App;