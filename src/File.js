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
             
            <p><input type="button" value="OFFICIAL DOCUMENT" id="document" onClick={this.officialDocument}/></p>
        <div >
            <p id="course"> Course Opportunities</p>
        </div>
        <div>
            <p id="job">Job Opportunities</p>
        </div>
        <div>
            <p id="social">Social Life</p>
        </div>
    </div>
      
    );
  }
}
