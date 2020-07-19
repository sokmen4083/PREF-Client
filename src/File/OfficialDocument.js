import React, { Component } from 'react';
import { Jumbotron, Button, Card, Container, Row, Col} from 'react-bootstrap';


export class Official extends Component {
   
  render() {
    return (
      <Jumbotron>
        <h1>Official Document</h1>
        <p>
        In this section, you can easily access the documents you need. 
        Family reunification, file combination, canton change, camp change ..
        </p>

        <Container>
          <Row>
            <Col>
            
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Family Union</Card.Title>
                  <Card.Text>
                  The document needed for a person who has been living in Switzerland 
                  and whose family is outside Europe to bring her family to Switzerland
                  can be accessed from this section.
                  </Card.Text>
                  <Button variant="primary" href="/FamilyUnion">Go to Family Union's Document</Button>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>File Combination</Card.Title>
                    <Card.Text>
                      The document needed to bring the family of a person who 
                      has settled in Switzerland and whose family has taken refuge 
                      in another country in Europe can be found here.
                    </Card.Text>
                    <Button variant="primary" href="/FileCombination">Go to File Combination's Document</Button>
                  </Card.Body>
                </Card>            
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Canton Change</Card.Title>
                  <Card.Text>
                    The document required for a "Canton Change" request 
                    by a person who has been living in Switzerland can be found here.
                  </Card.Text>
                  <Button variant="primary" href="/CantonChange">Go to Canton Change's Document</Button>
                </Card.Body>
              </Card>
            
            </Col>
            <Col>

              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Camp Change</Card.Title>
                  <Card.Text>
                   The document required by a person in camp in Switzerland 
                   to request a Camp Change is available here.
                  </Card.Text>
                  <Button variant="primary" href="CampChange">Go to Camp Change's Document</Button>
                </Card.Body>
              </Card>
            
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
