import React, { Component } from 'react';

export class Document extends Component {
  render() {

    console.log(this.props);

    return (
        <div id="files">
            <div id="official"> 
        <p>Official Documents</p>
        <ul>
            <li id="family">Family Union</li>
            <li id="file">File Combination</li>
            <li id ="canton">Canton Change</li>
            <li id="camp">Camp Change</li>
        </ul>
        </div>
        <div id="course">
            Course Opportunities
        </div>
        <div id="job">
            Job Opportunities
        </div>
        <div id="social">
            Social Life
        </div>
    </div>
      
    );
  }
}
