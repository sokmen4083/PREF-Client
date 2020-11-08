import React, { Component } from 'react';
import { Jumbotron, Button, Form} from 'react-bootstrap';


export class FileCombination extends Component {

  render() {
    return (
      <Jumbotron>
        <h1>File Combination</h1>
        <p>
          The document needed to bring the family of a person who 
          has settled in Switzerland and whose family has taken refuge 
          in another country in Europe can be found here.
        </p>
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Family Members</Form.Label>
            <Form.Label>Please enter your family members</Form.Label>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Wife's Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your wife's name" name="wifesName"  onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Wife's Birthday</Form.Label>
            <Form.Control type="date" name="wifesBirthday" onChange={this.handleInputChange} />
          </Form.Group>
          
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your First Child's Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your first child's name" name="firstChildName" onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your First Child's Birthday</Form.Label>
            <Form.Control type="date" name="firstChildBirthday" onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Second Child's Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your second child's name" name="secondChildName" onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Second Child's Birthday</Form.Label>
            <Form.Control type="date" name="secondChildBirthday" onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Third Child's Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your third child's name" name="thirdChildName" onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Third Child's Birthday</Form.Label>
            <Form.Control type="date" name="thirdChildBirthday" onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Fourth Child's Name</Form.Label>
            <Form.Control type="text" placeholder="please enter your forth child's name" name="forthChildName" onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Fourth Child's Birthday</Form.Label>
            <Form.Control type="date" name="forthChildBirthday" onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Adress In Your Country</Form.Label>
            <Form.Control type="text" placeholder="please enter your adress in your country" name="adress" onChange={this.handleInputChange}/>
          </Form.Group>
          <Button variant="primary" type="submit" href="Family-Pdf" onClick={this.sendFilesInfo}>
            Submit
          </Button>
        </Form> 
      </Jumbotron>   
    );
  }
}
