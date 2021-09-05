import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import WelcomeContainer from "./welcome/welcome_container";
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';

const App = () => (
  <div>
      <header>  
            <h1>amaZone</h1>
            <WelcomeContainer />
      </header>
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />      
  </div>
);

export default App;