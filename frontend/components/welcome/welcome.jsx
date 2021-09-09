import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../amaZoneLogo1.png'


const Welcome = ({ currentUser, logout }) => {
      let user;
      let logOutButton;
      if (currentUser) {
            
                  
            user = currentUser.username
            logOutButton = <button onClick={logout}>Logout</button>
                  
            
      } else {
            user = "Sign In"
            logOutButton = null
      }
      // else {
      //       return (
      //             <div>
      //                   <Link to="/signup">SignUp</Link>
      //                   <br></br>
      //                   <Link to="/login">Login</Link>
      //             </div>
      //       )
      // }

      return (
            <div>
                  <nav className="navbar">
                        <Link to="/products">
                              <img src={logo} className="logo"></img>
                        </Link>
                        <Link to="/login" className="signin-link">
                                    <div className="signin-menu">
                                    <span className="menu1">{ currentUser ? "Deliver to " + user : "Hello" }</span>
                                          <span className="menu2"><i className="fa fa-map-marker"></i>Select your address</span>
                                    </div>
                        </Link>
                        <div className="search">
                              <input type="text" className="search-input"></input>
                              <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="navright">
                              <Link to="/login" className="signin-link">
                                    <div className="signin-menu">
                                          <span className="menu1">Hello, {user}</span>
                                          <span className="menu2">Account & Lists</span>
                                    </div>
                              </Link>
                              <Link to="/" className="signin-link">
                                    <div className="signin-menu">
                                          <span className="menu1">Returns</span>
                                          <span className="menu2">& Orders</span>
                                    </div>
                              </Link>
                              <Link to="/products" className="signin-link">
                                    <div className="shopping-cart">
                                          <i className="fa fa-shopping-cart"></i>
                                    </div>
                              </Link>
                  
                        </div>
                  </nav>
                  
                  {logOutButton}
            </div>
      )

}

export default Welcome;