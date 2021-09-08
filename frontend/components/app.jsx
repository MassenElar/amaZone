import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import WelcomeContainer from "./welcome/welcome_container";
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'

const App = () => (
  <div>
        <WelcomeContainer/>
        <Switch>
          <Route exact path="/products/:productId" component={ProductShowContainer}/>
          <Route path="/products" component={ProductIndexContainer} />
          {/* <Route path="/" component={WelcomeContainer}/> */}
          <Route path="/login" component={LogInFormContainer} />
          <Route path="/signup" component={SignUpFormContainer} />
        </Switch>
            
  </div>
);

export default App;