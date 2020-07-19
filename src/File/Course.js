import React, { Component } from 'react';
import { Jumbotron, Card, Container, Row, Col} from 'react-bootstrap';


export class Course extends Component {
   
  render() {
    return (
      <Jumbotron>
        <h1>Courses</h1>
        <p>
          In this section, you can easily find the list and 
          popular ranking of the courses in your cantons.
        </p>

        <Container>
          <Row>
            <Col>
            
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                  
                  </Card.Text>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>            
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                   
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
