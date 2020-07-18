import React, { Component } from 'react';
import bild from './Pref.png'


export class Dashboard extends Component {
  constructor(props) {
		super(props);
    this.goToForm = this.goToForm.bind(this);
	}

goToForm(){
		  return window.location.href = "/Form"  
}


render() {
    return (
        <div>
          <p><h1 id="welcome">WELCOME TO PREF</h1></p>
          <p>
          <img src={bild} width="100%" height="100%" className="d-inline-block align-top" alt=""/>
          </p>
        <input type="button" value="Sign On" id="Sign-On" onClick={this.goToForm}/>
    </div>
      
    );
  }
}
