  import React, { Component } from 'react';
import {withOktaAuth} from '@okta/okta-react';


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
      this.setState({user: data[2]});
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
        <div id="profile">
          <h1>YOUR PROFILE</h1>
          <p>Your Name    :{this.state.user.firstName}</p>
          <p>Your Surname :{this.state.user.lastName}</p>
          <p>Your Mail    :{this.state.user.email}</p>
          <p>Your Password:</p>
          <p>Your Birthday:{this.state.user.birthday}</p>
          <p>Your Country :{this.state.user.country}</p>
          <p>Your Canton :{this.state.user.canton}</p>
          <p><input type="button" value="EDIT" id="edit" onClick={this.edit}/></p>
          <p><input type="button" value="Go to YOUR DOCUMENTS" id="document" onClick={this.goToYourDocuments}/></p>
      </div>
    );
  }
})