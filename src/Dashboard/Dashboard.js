import React, { Component } from 'react';
import {withOktaAuth} from '@okta/okta-react';
import UserService from '../service/UserService';




class Dashboard extends Component 
{  
  constructor(){
    super();
    this.checkUser = this.checkUser.bind(this);
    this.state = {user: {}};
  }

  async checkUser() {
    const user = await this.props.authService.getUser();
    this.setState({ user });
    return user;
  }

  async componentDidMount() {
    const oktaUser = await this.checkUser();
    let profile = await UserService.loadMyProfile(oktaUser.email);

    if(profile === null && !window.location.href.includes('/protected/register')){
      window.location.href = '/protected/register';
    } else{
      UserService.setCurrentUser(profile);
    }
  }

  render() {
    return (<></>);
  }
}

export default withOktaAuth(Dashboard);
