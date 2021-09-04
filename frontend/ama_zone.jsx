import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Zabi</h1>, root);
  // const user = {email: "ara", password: "password"}
  // window.logout = logout(user);
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
});