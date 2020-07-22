import React, { Component } from 'react';
import { Jumbotron, Button, Card, Container, Row, Col } from 'react-bootstrap';
import about from './about.svg'




export class About extends Component {
  
render() {
  return (
    <Jumbotron>
      <h1>About of Pref</h1>
      <p>
      The number of refugees is increasing every day. 
      Therefore, the needs of refugees are increasing at the same rate. 
      The period we are in is the internet and technology period.
      </p>
	    <p>
      This project combines refugee needs and technology and tries to create
      a program that serves to find solutions to needs. This program is made 
      to meet the needs of refugees on the online platform.
      </p>
      <p>
      Many thanks to "Hi; Coders" for their support in the construction of this project.
      </p>

      <Container>
        <Row>
          <Col>
          
            <Card style={{ width: '18rem' }}>
            <img src={about} width="60" height="40" className="d-inline-block align-top" alt=""/>
              <Card.Body>
                <Card.Title>Hi;Coders</Card.Title>
                <Card.Text>
                  Hi;Coders
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          
          </Col>      
        </Row>
      </Container>
    </Jumbotron>
  );
}
}
