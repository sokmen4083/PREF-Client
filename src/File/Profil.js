import React, { Component } from 'react';

export class Profil extends Component {
  constructor(props) {
		super(props);
		this.goToYourDocuments = this.goToYourDocuments.bind(this);
	  }

  goToYourDocuments(){
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
		return window.location.href = "/file" 
	}); 
}

  render() {
    return (
        <div id="profile">
          
        <h1>YOUR PROFILE</h1>
        Your Name :<p id="your-name"></p>
        Your Surname :<p id="your-surname"> </p>
        Your Mail : <p id="your-mail"></p>
        Your Country : <p id="your-country"></p>
        Your Password : <p id="your-password"></p>
        Your Birthday : <p id="your-birthday"></p>
        <p id="edit">EDIT</p>
        <p><input type="button" value="Go to YOUR DOCUMENTS" id="document" onClick={this.goToYourDocuments}/></p>
    </div>
      
    );
  }
}

