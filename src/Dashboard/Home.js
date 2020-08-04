import React, { Component } from 'react';
import { Jumbotron, Button, Card, Container, Row, Col} from 'react-bootstrap';
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
        <p>
          The number of refugees is increasing every day. 
          Therefore, the needs of refugees are increasing at the same rate. 
          The period we are in is the internet and technology period.
          This project combines refugee needs and technology and tries to create 
          a program that serves to find solutions to needs. This program is made 
          to meet the needs of refugees on the online platform.
        </p>
        <p>
          You can access the documents you need from the fields below.
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
                  <Button variant="primary" href="/protected/OfficialDocument">Go to Official Document</Button>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
              <img src={job} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Body>
                    <Card.Title>Jobs</Card.Title>
                    <Card.Text>
                      In this section, you can easily find suitable job opportunities..
                      You can find out which business areas you need in your canton
                    </Card.Text>
                    <Button variant="primary" href="/protected/Job">Go to Jobs</Button>
                  </Card.Body>
                </Card>            
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
              <img src={course} width="60" height="40" className="d-inline-block align-top" alt=""/>
                <Card.Body>
                  <Card.Title>Courses</Card.Title>
                  <Card.Text>
                    In this section, you can easily find the list and 
                    popular ranking of the courses in your cantons.
                  </Card.Text>
                  <Button variant="primary" href="/protected/Course">Go to Courses</Button>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
              <img src={social} width="60" height="40" className="d-inline-block align-top" alt=""/>
                <Card.Body>
                  <Card.Title>Social Life</Card.Title>
                  <Card.Text>
                    In this section, you can get information about social life in Switzerland.
                    Places to visit, transportation facilities, Swiss History ...
                  </Card.Text>
                  <Button variant="primary" href="/protected/SocialLife">Go to Social Life</Button>
                </Card.Body>
              </Card>
            
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
