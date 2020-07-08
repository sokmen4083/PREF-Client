import React from 'react';
import { Profil } from './Profil';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

function App() {
  return (
    <Router>
      <Security issuer='https://dev-516899.okta.com/oauth2/default'
                clientId='0oai72limbxlfkVAf4x6'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}>
        <SecureRoute path='/' exact={true} component={Profil}/>
        <Route path='/callback' component={LoginCallback}/>
      </Security>
    </Router>
  );
}

export default App;