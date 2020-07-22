import React, { Component } from 'react';
import { Jumbotron, Card, Container, Row, Col} from 'react-bootstrap';
import job from './job.png'


export class Jobs extends Component {
   
  render() {
    return (
      <Jumbotron>
      <img src={job} width="60" height="40" className="d-inline-block align-top" alt=""/>
        <h1>Jobs</h1>
        <p>
          In this section, you can easily find suitable job opportunities..
          You can find out which business areas you need in your canton
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
