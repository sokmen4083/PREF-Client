import React, { Component } from 'react';

export class Form extends Component {
	constructor(props) {
		super(props);
		this.sendProfileInfo = this.sendProfileInfo.bind(this);
	  }

  sendProfileInfo(){

	console.log("test")
	  // fetch post
	  //return window.location.href = "/profil"
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
		return window.location.href = "/Profil" 
	}); 
  }

  render() {
    return (
      <form id="registration">
           
        <h1>REGISTRATION FORM</h1>
        <p>NAME : <input type="text" id="name" placeholder="please enter your name"/></p>
        <p>SURNAME : <input type="text" id="surname" placeholder="please enter your surname"/></p>
        <p>EMAIL : <input type="email" id="email" placeholder="please enter your Email"/></p>
        <p>BIRTHDAY : <input type="date" id="date"></input> </p>
    
         <p><input type="button" value="SUBMIT" id="submit" onClick={this.sendProfileInfo}/></p> 
        
      </form>
      
    );
  }
}

