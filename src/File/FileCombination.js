import React, { Component } from 'react';
import { Jumbotron, Button,} from 'react-bootstrap';


export class FileCombination extends Component {

  render() {
    return (
      <Jumbotron>
        <h1>File Combination</h1>
        <p>
          The document needed to bring the family of a person who 
          has settled in Switzerland and whose family has taken refuge 
          in another country in Europe can be found here.
        </p>
        
        <div id="file-combination">
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
          <Button variant="primary" href="/Family-Pdf" id="submit">SUBMIT</Button>
          </div>
      </div> 
      </Jumbotron>   
    );
  }
}
