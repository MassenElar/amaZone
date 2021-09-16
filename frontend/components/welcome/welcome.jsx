import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../amaZoneLogo1.png'


class Welcome extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  show: false,
                  word: ''
            }
            this.whenHover = this.whenHover.bind(this);
            // this.HandleSearch = this.HandleSearch.bind(this)
      }

      whenHover(e) {
            const newState = !this.state.show 
            this.setState({show: newState})
      }

      inputChange(field) {
            return e => this.setState({ [field]: e.currentTarget.value });
      } 
      
      // HandleSearch(e) {
      //       e.preventDefault();
      //       this.props.fetchProducts(this.state.word)
      //       this.setState({ word: '' });
      // }
      
      render(){
            const { currentUser, logout } = this.props
            let user;
            let logOutButton;
            let signInButton;
            let signUpLink;
            if (currentUser) {
                  
                        
                  user = currentUser.username
                  logOutButton = <button className="drp-signin-btn" onClick={logout}>Logout</button>
                  signInButton = null
                  signUpLink = null 
                  
            } else {
                  user = "Sign In"
                  logOutButton = null
                  signInButton = <Link to="/login"><button className="drp-signin-btn">Sign In</button></Link>
                  signUpLink = <p>New customer? <span ><Link className="drp-signup-span" to="signup"> Start Here</Link></span></p>

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
                              <Link to="/">
                                    <img src={window.amaZoneLogo1URL} className="logo"></img>
                              </Link>
                              <Link to="/login" className="signin-link">
                                          <div className="signin-menu">
                                          <span className="menu1">{ currentUser ? "Deliver to " + user : "Hello" }</span>
                                                <span className="menu2"><i className="fa fa-map-marker"></i>Select your address</span>
                                          </div>
                              </Link>
                              
                              <form className="search" >
                                          <input type="text" className="search-input" >
                                          </input>
                                          <i className="fa fa-search" aria-hidden="true"></i>
                              </form>
                              
                              <div className="navright">
                                    <div className="signin-link">
                                          <div className="signin-menu" onMouseOver={this.whenHover} >
                                                <span className="menu1">Hello, {user}</span>
                                                <span className="menu2">Account & Lists</span>
                                                <div onMouseOver={e => e.stopPropagation()} onMouseLeave={this.whenHover} className={this.state.show ? "show" : "clear"}>
                                                      {logOutButton}
                                                      {signInButton}
                                                      {signUpLink} 
                                                </div>
                                          </div>
                                    </div>
                                    <div  className="signin-link">
                                          <div className="signin-menu" >
                                                <span className="menu1">Returns</span>
                                                <span className="menu2">& Orders</span>
                                                
                                          </div>
                                    </div>
                                    <Link to="/cart" className="signin-link">
                                          <div className="shopping-cart">
                                                <i className="fa fa-shopping-cart"></i>
                                          </div>
                                    </Link>
                        
                              </div>
                        </nav>
                        
                  </div>
            )
      }

}

export default Welcome;