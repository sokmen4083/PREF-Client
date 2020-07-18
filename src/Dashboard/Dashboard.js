import React, { Component } from 'react';

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
        <input type="button" value="Sign On" id="Sign-On" onClick={this.goToForm}/>
    </div>
      
    );
  }
}
