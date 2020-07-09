import React, { Component } from 'react';

export class File extends Component {
  render() {

    console.log(this.props);

    return (
        <div id="files">
            <div id="official"> 
        <p id="official-document">Official Documents</p>
        <ul>
            <li id="family">Family Union</li>
            <li id="file">File Combination</li>
            <li id ="canton">Canton Change</li>
            <li id="camp">Camp Change</li>
        </ul>
        {this.props.children}
        </div>
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
