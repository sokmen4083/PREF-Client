import React, { Component } from 'react';

export class Family extends Component {
  render() {

    console.log(this.props);

    return (
        <div id="family-union">
        <p>FAMILY MEMBERS : <input type="number" placeholder="please enter your family members"></input></p>
        <div id="wife">
        <p>YOUR WIFE'S NAME : <input type="text" placeholder="please enter your wife's name"></input></p>
        <p>YOUR WIFE'S BIRTHDAY : <input type="DATE" placeholder="please enter your wife's birthday"></input></p>
        </div>
        <div id="children">
        <p>YOUR FIRST CHILD'S NAME : <input type="text" placeholder="please enter your first child's name"></input></p>
        <p>YOUR FIRST CHILD'S BIRTHDAY : <input type="DATE" placeholder="please enter your first child's birthday"></input></p>
        <p>YOUR SECOND CHILD'S NAME : <input type="text" placeholder="please enter your second child's name"></input></p>
        <p>YOUR SECOND CHILD'S BIRTHDAY : <input type="DATE" placeholder="please enter your second child's birthday"></input></p>
        <p>YOUR THIRD CHILD'S NAME : <input type="text" placeholder="please enter your third child's name"></input></p>
        <p>YOUR THIRD CHILD'S BIRTHDAY : <input type="DATE" placeholder="please enter your third child's birthday"></input></p>
        </div>
        <div>
        <input type="button" value="SUBMIT" id="submit"></input>
        </div>
    </div>
      
    );
  }
}
