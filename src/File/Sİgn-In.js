import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


export class SıgnIn extends Component {
	constructor(props) {
		super(props);
		this.sendProfileInfo = this.sendProfileInfo.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.state = {user:{}};
	}

  sendProfileInfo()
  {
	  let profilData = this.state.user;
	  fetch('http://localhost:5501/users/profile',{
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(profilData)
	  }).then(function(response) {
		  return response.json();
	  }).then(function(data) {
		  return window.location.href = "/Profil" 
	  }); 
  }

  handleInputChange(event) {
    const target = event.target;
    //const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    let user = this.state.user;
    user[name] = target.value;
    this.setState({user});
  }

  

  render() {
    return (
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter your email" value={this.state.user.email} onChange={this.handleInputChange} />
        
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Your Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={this.sendProfileInfo}>
        Submit
      </Button>
    </Form>
      
    );
  }
}

