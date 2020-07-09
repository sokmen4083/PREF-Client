import React from 'react';
import { Form } from './Form';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { Profil } from './Profil';
import { Dashboard } from './Dashboard';
import { File } from './File';
import { Family } from './FamilyUnion';


function App() {
  return (
    <Router>
      <Security issuer='https://dev-516899.okta.com/oauth2/default'
                clientId='0oajr54xsSO4dG5dc4x6'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}>
        <SecureRoute path='/' exact={true} component={Form}/>
        <Route path='/callback' component={LoginCallback}/>
        <Route path='/profil' component={Profil}/>
        <Route path='/file' component={File}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/FamilyUnion' component={Family}/>
      </Security>
    </Router>
  );
}

export default App;

