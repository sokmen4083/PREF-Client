import React, { Component } from 'react';

export class Profil extends Component {
  render() {
    console.log(this.props);

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
    </div>
      
    );
  }
}
