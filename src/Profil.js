import React, { Component } from 'react';

export class Profil extends Component {
  render() {
    fetch('http://localhost:3000/Form').then(
            function(response){
                return response.json();
            }
            ).then(function(jsonData){
                return JSON.stringify(jsonData);
            }
            ).then(function(){
                this.setState();
                console.log();
            });
    return (
        <div id="profile">
        <h1>YOUR PROFILE</h1>
        Your Name :<p id="your-name"></p>
        Your Surname :<p id="your-surname"> </p>
        Your Mail : <p id="your-mail"></p>
        Your Country : <p id="your-country"></p>
        Your Password : <p id="your-password"></p>
        Your Birthday : <p id="your-birthday"></p>
        Your Documents : <p id="your-birthday"></p>
        <p id="edit">EDIT</p>
    </div>
      
    );
  }
}
