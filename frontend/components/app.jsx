import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import WelcomeContainer from "./welcome/welcome_container";
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import ProductIndexContainer from './products/product_index_container'

const App = () => (
  <div>
      <Route path="/" component={WelcomeContainer}/>
      <Route path="/products" component={ProductIndexContainer} />
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />      
  </div>
);

export default App;