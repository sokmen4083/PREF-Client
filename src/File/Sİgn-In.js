import React, { Component } from 'react';

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

  handleSelectChange(event) {
     this.setState({value: event.target.value});
  }

  render() {
    return (
		<div>
      <form id="sign-in">
        <h1>Sign-in</h1>
        <p>EMAIL : 
          <input type="email" id="email" name="email" placeholder="please enter your Email" value={this.state.user.email} onChange={this.handleInputChange}/></p>
        <p>PASSWORD : 
          <input type="password" id="password" name="password" placeholder="please enter your Password" onChange={this.handleInputChange}/></p>

           <input type="button" value="SUBMIT" id="submit" onClick={this.sendProfileInfo}/> 
      </form>
      </div>
      
    );
  }
}

