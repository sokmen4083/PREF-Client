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
      this.setState({user: data[0]});
    });
  }

  goToYourDocuments(){
     
  }

edit(){
  //return window.location.href = "/file"
  let profilData = {"name" : "Mehmet"}
  fetch('http://localhost:5501/myFiles/profile',{
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
  method: 'post',
  body: JSON.stringify(profilData)
  }).then(function(response) {
  return response.json();
  }).then(function(data) {
  return window.location.href = "/" 
}); 
}

  render() {
    return (
        <div id="profile">
          
        <h1>YOUR PROFILE</h1>
    Your Name :<p id="your-name">{this.state.user.firstName}</p>
        Your Surname :<p id="your-surname"> {this.state.user.lastName}</p>
        Your Mail : <p id="your-mail"></p>
        Your Country : <p id="your-country"></p>
        Your Password : <p id="your-password"></p>
        Your Birthday : <p id="your-birthday"></p>
        <p><input type="button" value="EDIT" id="edit" onClick={this.edit}/></p>
        <p><input type="button" value="Go to YOUR DOCUMENTS" id="document" onClick={this.goToYourDocuments}/></p>
    </div>
      
    );
  }
}
)