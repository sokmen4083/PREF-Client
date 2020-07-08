import React, { Component } from 'react';

export class Merhaba extends Component {
  render() {

    console.log(this.props);

    return (
      <div>
        <h1>REGISTRATION FORM</h1>
        <p>Herkese kapali ama sana acik sayfamiza hosgeldin.</p>
      </div>
    );
  }
}