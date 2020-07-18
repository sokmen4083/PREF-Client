import React, { Component } from 'react';
import { Jumbotron, Button, Card, Container, Row, Col } from 'react-bootstrap';
import document from './document.png'
import job from './job.png'
import course from './course.png'
import social from './social.png'

export class Home extends Component {
   
  render() {
    return (
      <Jumbotron>
        <h1>Hello,Welcome to Pref</h1>
        <p>
          As "PREF", we are happy to serve our valued refugees 
          who have to leave their country.
        </p>

        <Container>
          <Row>
            <Col>
            
              <Card style={{ width: '18rem' }}>
              <img src={document} width="60" height="40" className="d-inline-block align-top" alt=""/>
                <Card.Body>
                  <Card.Title>Official Documents</Card.Title>
                  <Card.Text>
                    In this section, you can easily access the documents you need. 
                    Family reunification, file combination, canton change, camp change ..
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
              <img src={job} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Body>
                    <Card.Title>Job Opportunitites</Card.Title>
                    <Card.Text>
                      In this section, you can easily find suitable job opportunities..
                      You can find out which business areas you need in your canton
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>            
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
              <img src={course} width="60" height="40" className="d-inline-block align-top" alt=""/>
                <Card.Body>
                  <Card.Title>Course Opportunuties</Card.Title>
                  <Card.Text>
                    In this section, you can easily find the list and 
                    popular ranking of the courses in your cantons.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
              <img src={social} width="60" height="40" className="d-inline-block align-top" alt=""/>
                <Card.Body>
                  <Card.Title>Social Lİfe</Card.Title>
                  <Card.Text>
                    In this section, you can get information about social life in Switzerland.
                    Places to visit, transportation facilities, Swiss History ...
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
