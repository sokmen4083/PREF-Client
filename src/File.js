import React, { Component } from 'react';

export class File extends Component {
    constructor(props) {
		super(props);
		this.officialDocument = this.officialDocument.bind(this);
		
	  }

  officialDocument(){
      return window.location.href = "/OfficialDocument"
}
  render() {

    console.log(this.props);

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
