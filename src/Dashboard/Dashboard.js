import React, { Component } from 'react';
import bild from './Pref.png'


export class Dashboard extends Component {
  
render() {
    return (
        <div>
          <p><h1 id="welcome">WELCOME TO PREF</h1></p>
          <p>
          <img src={bild} width="100%" height="100%" className="d-inline-block align-top" alt=""/>
          </p>
    </div>
      
    );
  }
}
