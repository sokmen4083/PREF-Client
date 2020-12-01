import React, { Component } from 'react';
import { Jumbotron, Card, Container, Row, Col} from 'react-bootstrap';
import document from './document.png'
import change from './change.svg'
import family from './family.png'

import { Link } from 'react-router-dom';


export class PrefDocuments extends Component {
   
  render() {
    return (
      <Jumbotron>
        <h1>PETITIONS</h1>
        <p>
          In this section, you can easily access the documents you need. 
          Family union, file combination, canton change, camp change ..
        </p>

        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                <img src={family} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Title>Family Union</Card.Title>
                  <Card.Text>
                  The document needed for a person who has been living in Switzerland 
                  and whose family is outside Europe to bring her family to Switzerland
                  can be accessed from this section.
                  </Card.Text>
                  <Link to="/FamilyUnion">Go to Family Union's Document</Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                  <Card.Body>
                    <img src={document} width="60" height="40" className="d-inline-block align-top" alt=""/>
                    <Card.Title>File Combination</Card.Title>
                    <Card.Text>
                      The document needed to bring the family of a person who 
                      has settled in Switzerland and whose family has taken refuge 
                      in another country in Europe can be found here.
                    </Card.Text>
                    <Link to="/FileCombination">Go to File Combination's Document</Link>
                  </Card.Body>
                </Card>    
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <img src={change} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Title>Canton Change</Card.Title>
                  <Card.Text>
                    The document required for a "Canton Change" request 
                    by a person who has been living in Switzerland can be found here.
                  </Card.Text>
                  <Link to="/CantonChange">Go to Canton Change's Document</Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <img src={change} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Title>Camp Change</Card.Title>
                  <Card.Text>
                   The document required by a person in camp in Switzerland 
                   to request a Camp Change is available here.
                  </Card.Text>
                  <Link to="/CampChange">Go to Camp Change's Document</Link>
                </Card.Body>
              </Card>
            
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}