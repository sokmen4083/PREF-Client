import React, { Component } from 'react';

export class Form extends Component {
  render() {

    console.log(this.props);

    return (
      <div>
                <p><h1 id="welcome">WELCOME to PREF</h1></p>
                <div id="registration">
        <h1>REGISTRATION FORM</h1>
        <p>NAME : <input type="text" placeholder="please enter your name"></input></p>
        <p>SURNAME : <input type="text" placeholder="please enter your surname"></input></p>
        <p>EMAIL : <input type="email" placeholder="please enter your Email"></input></p>
        <p>BIRTHDAY : <input type="date"></input> </p>
         <p><input type="button" value="SUBMIT" id="submit" onclick="nextPage()"></input></p> 
        </div>  
      </div>
      
    );
  }
}
