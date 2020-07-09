import React, { Component } from 'react';

export class Dashboard extends Component{
  render() {
     return (
        <div id="dashboard">
           <div>
             <p id="home">Home</p>
             </div>
           <div>
             <p id="about">About</p>
             </div>
           <div>
             <p id="contact">Contact</p>
             </div>
           
           {this.props.children}
        </div>
     )
  }
}
export default Dashboard;
