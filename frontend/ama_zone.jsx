import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { login, signup, logout } from "./actions/session_actions";
// import { login } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  // const user = {email: "ara", password: "password"}
  // window.logout = logout(user);
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  ReactDOM.render(<Root store={ store }/>, root);
  // window.dispatch(login(user))
});