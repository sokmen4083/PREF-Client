import React from 'react';
import { Dashboard } from './Dashboard/Dashboard';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { default as Profil } from './File/Profil';
import { File } from './File/File';
import { Family } from './File/FamilyUnion';
import { FamilyPdf } from './File/Family-Pdf';
import { Official } from './File/OfficialDocument';
import { Form } from './File/Form';
import { Home } from './Dashboard/Home';
import { About } from './Dashboard/About';
import { Contact } from './Dashboard/Contact';



function App() {
  return (
    <Router>
      <Security issuer='https://dev-516899.okta.com/oauth2/default'
                clientId='0oajr54xsSO4dG5dc4x6'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}>
        <SecureRoute path='/' exact={true} component={Dashboard}/>
        <Route path='/callback' component={LoginCallback}/>
        <Route path='/form' component={Form}/>
        <Route path='/profil' component={Profil}/>
        <Route path='/file' component={File}/>
        <Route path='/FamilyUnion' component={Family}/>
        <Route path='/Family-Pdf' component={FamilyPdf}/>
        <Route path='/OfficialDocument' component={Official}/>
        <Route path='/Home' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
      </Security>
    </Router>
  );
}

export default App;

