import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import WelcomeContainer from "./welcome/welcome_container";
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import CartItemContainer from './cart_items/cart_items_container'

const App = () => (
  <div>
        {/* <header><WelcomeContainer/></header> */}
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute exact path="/products/:productId" component={ProductShowContainer}/>
          <ProtectedRoute exact path="/cart" component={CartItemContainer}/>
          <Route exact path="/" component={ProductIndexContainer} />
        </Switch>
            
  </div>
);

export default App;