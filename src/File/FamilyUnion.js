import React, { Component } from 'react';
import { Jumbotron, Button, Form} from 'react-bootstrap';
import family from './family.svg'


export class Family extends Component {
  constructor(props) {
      super(props);
      this.sendFilesInfo = this.sendFilesInfo.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.state = {file:{}};
  }
  sendFilesInfo()
  {
	  let familyData = this.state.file;
	  fetch('http://localhost:5501/files/family',{
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(familyData)
	  }).then(function(response) {
		  return response.json();
	  }).then(function(data) {
		  return window.location.href = "/Family-Pdf" 
	  }); 
  }

  handleInputChange(event) {
    const target = event.target;
    //const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    let file = this.state.file;
    file[name] = target.value;
    this.setState({file});
  }

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
