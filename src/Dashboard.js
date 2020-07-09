import React, { Component } from 'react';

export class Dashboard extends Component{
  render() {
     return (
        <div>
           <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           </ul>
           {this.props.children}
        </div>
     )
  }
}
export default Dashboard;
