import React, { Component } from 'react';

export class Profil extends Component {
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
      </div>
    );
  }
}