import React, { Component } from 'react';
import {withOktaAuth} from '@okta/okta-react';
import { Table } from 'react-bootstrap';




async function checkUser() {
  const userInfo = await this.props.authService.getUser();
  console.log(userInfo)
  this.setState({ okta_email: userInfo.email });
  return userInfo;
}

export default withOktaAuth(class Profil extends Component {
  constructor(props) {
		super(props);
		this.goToYourDocuments = this.goToYourDocuments.bind(this);
    this.edit = this.edit.bind(this);
    this.checkUser = checkUser.bind(this);
    this.state = {user:{}};
  }
  
  async componentDidMount() {
    const userInfo = await this.checkUser();
    fetch('http://localhost:5501/users/email/'+userInfo.email).then(function(response) {
		  return response.json();
	  }).then((data) => {
      this.setState({user: data[0]});
    });
  }

  goToYourDocuments(){
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
		  return window.location.href = "/OfficialDocument" 
	  });  
  }

  edit(){
    return window.location.href = "/form"
  }

  render() {
    return (
        <div>
          <Table striped bordered hover>
  <thead>
    <tr>
      <th colspan="2" id="profil">YOUR PROFILE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First Name</td>
      <td>{this.state.user.firstName}</td>
      
    </tr>
    <tr>
      <td>Last Name</td>
      <td>{this.state.user.lastName}</td>
      
    </tr>
    <tr>
      <td>Mail</td>
      <td >{this.state.user.email}</td>
    </tr>

    <tr>
      <td>Birthday</td>
      <td >{this.state.user.birthday}</td>
    </tr>

    <tr>
      <td>Country</td>
      <td >{this.state.user.country}</td>
    </tr>

    <tr>
      <td>Canton</td>
      <td >{this.state.user.canton}</td>
    </tr>
  </tbody>
</Table>
          <p><input type="button" value="EDIT" id="edit" onClick={this.edit}/></p>
          <p><input type="button" value="Go to YOUR DOCUMENTS" id="document" onClick={this.goToYourDocuments}/></p>
      </div>
    );
  }
})