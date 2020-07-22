import React, { Component } from 'react';
import { Jumbotron, Button, Form} from 'react-bootstrap';
import family from './family.svg'


export class Family extends Component {

  render() {
    return (
      <Jumbotron>
       <img src={family} width="120" height="80" className="d-inline-block align-top" alt=""/>
        <h1>Family Union</h1>
        <p>
         The document needed for a person who has been living in Switzerland 
         and whose family is outside Europe to bring her family to Switzerland
         can be accessed from this section.
        </p>
        
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Family Members</Form.Label>
    <Form.Control type="number" placeholder="please enter your family members" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Wife's Name</Form.Label>
    <Form.Control type="text" placeholder="please enter your wife's name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Wife's Birthday</Form.Label>
    <Form.Control type="date" />
  </Form.Group>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your First Child's Name</Form.Label>
    <Form.Control type="text" placeholder="please enter your wife's name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your First Child's Birthday</Form.Label>
    <Form.Control type="date" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Second Child's Name</Form.Label>
    <Form.Control type="text" placeholder="please enter your wife's name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Second Child's Birthday</Form.Label>
    <Form.Control type="date" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Third Child's Name</Form.Label>
    <Form.Control type="text" placeholder="please enter your wife's name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Third Child's Birthday</Form.Label>
    <Form.Control type="date" />
  </Form.Group>
  <Button variant="primary" type="submit" href="Family-Pdf">
    Submit
  </Button>
</Form> 
      </Jumbotron>   
    );
  }
}
