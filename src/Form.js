import React, { Component } from 'react';

export class Form extends Component {
  render() {

    console.log(this.props);

    return (
      <div>
        <h1>REGISTRATION FORM</h1>
        <p>Welcome.</p>
        <p>NAME</p>
        <input type="text" placeholder="please enter your name"></input>
        <p>SURNAME</p>
        <input type="text" placeholder="please enter your Ssurname"></input>
        <p>EMAIL</p>
        <input type="email" placeholder="please enter your Email"></input>
        <p>BIRTHDAY</p>
        <input type="date"></input>  
        <p><input type="button" value="SUBMIT" id="submit" onclick="nextPage()"></input></p> 
        <h1>YOUR PROFILE</h1>
    <p>Your Name :<p id="your-name"></p></p>
    <p>Your Surname :<p id="your-name"></p></p>
    <p>Your Mail :<p id="your-name"></p></p>
    <p>Your Birthday :<p id="your-name"></p></p>    
      </div>
      
    );
  }
}
