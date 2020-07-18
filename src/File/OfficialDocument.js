import React, { Component } from 'react';

export class Official extends Component{
  constructor(props) {
      super(props);
      this.familyUnion = this.familyUnion.bind(this);
	}

  familyUnion(){
    return window.location.href = "/FamilyUnion"
     /* let profilData = this.state.user;
	  fetch('http://localhost:5501/users/profile',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profilData)
	  }).then(function(response) {
		  return response.json();
	  }).then(function(data) {
		  return window.location.href = "/FamilyUnion" 
	  }); */
  }

  render() {
     return (
        <div id="official">
            <div>
               <p>Please click on the document you want</p>
           </div>
            <p><input type="button" id="family" value="Family Union" onClick={this.familyUnion}/></p>
            <p><input type="button" id="file" value="File Combination" onClick={this.fileCombination}/></p>
            <p><input type="button" id="canton-change" value="Canton Change" onClick={this.cantonChange}/></p>
            <p><input type="button" id="camp-change" value="Camp Change" onClick={this.campChange}/></p>
            {this.props.children}
        </div>
     )
  }
}

export default Official;