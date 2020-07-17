import React, { Component } from 'react';

export class Contact extends Component {
    constructor(props) {
		super(props);
    this.goToForm = this.goToForm.bind(this);
    this.home = this.home.bind(this);
    this.about = this.about.bind(this);
    this.contact = this.contact.bind(this);
	  }

goToForm(){
		  return window.location.href = "/Form"  
}

home(){
        return window.location.href = "/home"  
}
about(){
  return window.location.href = "/about"  
}
contact(){
  return window.location.href = "/contact"  
}
  render() {

    console.log(this.props);

    return (
    <div id="dashboard">
            <p><input type="button" id="home" value="Home" onClick={this.home}/></p>
            <p><input type="button" id="about" value="About" onClick={this.about}/></p>
            <p><input type="button" id="contact" value="Contact" onClick={this.contact}/></p>
        <div id="contact-page"><p>Aşağıdaki bilgilerden bize ulaşabilrsiniz.</p>
            <p>Mehmet Sökmen</p>
            <p>mail:sokmen4083@gmail.com</p>
            <p>tlf:077777777</p>
        </div>
        <input type="button" value="Sign On" id="Sign-On" onClick={this.goToForm}/>
    </div>
      
    );
  }
}
