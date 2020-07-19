import React, { Component } from 'react';
import { Jumbotron, Button,} from 'react-bootstrap';


export class Family extends Component {

  render() {
    return (
      <Jumbotron>
        <h1>Family Union</h1>
        <p>
         The document needed for a person who has been living in Switzerland 
         and whose family is outside Europe to bring her family to Switzerland
         can be accessed from this section.
        </p>
        
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
          <Button variant="primary" href="/Family-Pdf" id="submit">SUBMIT</Button>
          </div>
      </div> 
      </Jumbotron>   
    );
  }
}
