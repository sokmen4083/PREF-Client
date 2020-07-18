import React, { Component } from 'react';

export class File extends Component {
    constructor(props) {
		super(props);
		this.officialDocument = this.officialDocument.bind(this);
		
	  }

  officialDocument(){
    return window.location.href = "/OfficialDocument" 
    /*let profilData = this.state.user;
	  fetch('http://localhost:5501/users/profile',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profilData)
	  }).then(function(response) {
		  return response.json();
	  }).then(function(data) {
		  return window.location.href = "/OfficialDocuments" 
	  });*/ 
  }

  render() {
    return (
        <div id="files">
            <div>
               <p>Please click on the document you want</p>
           </div>
           <div>  
            <p><input type="button" value="OFFICIAL DOCUMENT" id="document" onClick={this.officialDocument}/></p>
            </div>
        <div>
        <p><input type="button" value="COURSE OPPORTUNITIES" id="course"/></p>
        </div>
        <div>
        <p><input type="button" value="JOB OPPORTUNITIES" id="course"/></p>
        </div>
        <div>
        <p><input type="button" value="SOCIAL LIFE" id="course"/></p>
        </div>
        
    </div>
      
    );
  }
}
