import React, { Component } from 'react';
import { Jumbotron, Card, Container, Row, Col } from 'react-bootstrap';
import contact from './contact.png'




export class Contact extends Component {
  
render() {
  return (
    <Jumbotron>
      <h1>Contact</h1>
      <p>
      Contact us using the contact information below
      </p>
	    

      <Container>
        <Row>
          <Col>
          
            <Card style={{ width: '18rem' }}>
            <img src={contact} width="60" height="40" className="d-inline-block align-top" alt=""/>
              <Card.Body>
                <Card.Title>Contact us</Card.Title>
                <Card.Text>
                  <p>Mehmet Sökmen</p> 
                  <p>e-mail: sokmen4083@gmail.com</p>
                  <p>Tlf:+41 77 914 92 45</p>
                </Card.Text>
              </Card.Body>
            </Card>
          
          </Col>      
        </Row>
      </Container>
    </Jumbotron>
  );
}
}
