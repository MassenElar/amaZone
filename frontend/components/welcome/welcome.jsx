import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Badge from '@mui/material/Badge'


// import logo from '../../../amaZoneLogo1.png'


class Welcome extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  show: false,
                  word: '',
                  isHidden: false,
                  suggestions: [],
            }
            this.suggest = [
                  'Phones',
                  'Smart Tvs',
                  'Tablettes',
                  'Dell',
                  'Samsung',
                  'Smart Waches',
                  'Laptops',
                  'Lenovo',
                  'Apple',
                  'Iphone',
                  'Huawei'
            ]
            this.whenHover = this.whenHover.bind(this);
            this.HandleSearch = this.HandleSearch.bind(this)
      }
      componentDidMount() {
            this.props.fetchCartItems()
      }

      whenHover(e) {
            const newState = !this.state.show 
            this.setState({show: newState})
      }

      inputChange(field) {
            return e => this.setState({ [field]: e.currentTarget.value });
      } 
      
      HandleSearch(e) {
            e.preventDefault();
            this.props.fetchProducts(this.state.word).then(() => this.props.history.push("/search"))
            
            this.setState({ word: '' });
      }

      toggleIsHidden() {
            this.setState((currentState) => ({
                  isHidden: !currentState.isHidden
            }));
      }

      onTextChanged = (e) => {
            const value = e.target.value;
            let suggestions = [];
            if (value.length > 0) {
                  const regex = new RegExp(`^${value}`, 'i');
                  suggestions = this.suggest.sort().filter(v => regex.test(v));
            }
            this.setState(() => ({ suggestions, word: value }));
      }

      suggestionSelect (value) {
            this.setState(() => ({
                  word: value,
                  suggestions: []
            }))
      }

      renderSuggest() {
            const { suggestions } = this.state;
            if (suggestions.length === 0) {
                  return null
            }
            return (
                  <ul className="suggested_words">
                        {suggestions.map((ele) => <li onClick={() => this.suggestionSelect(ele)}>{ ele }</li>)}
                  </ul>
            )
      }
      
      
      render(){
            const { currentUser, logout, cartItems } = this.props
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
            let cartCount = 0;
            if (currentUser && cartItems.length !== 0) {
                  cartItems.forEach(cartItem => {
                        cartCount += cartItem.quantity
                  }); 
            }
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
                              
                              <form className="search" onSubmit={this.HandleSearch}>
                                          {/* <div className='search-div'> */}
                                                {/* <input type="text" className="search-input" name="select" list='select'  value={this.state.word} onChange={this.inputChange('word')} onClick={() => this.toggleIsHidden()}>
                                                
                                                </input> */}
                                                <input type="text" className="search-input" name="select" list='select'  value={this.state.word} onChange={this.onTextChanged} onClick={() => this.toggleIsHidden()}>
                                                
                                                </input>
                                                {this.renderSuggest()}
                                                {/* <datalist className="search-dropdown" id="select">
                                                            <option value="Laptops"/>
                                                            <option value="Smart Watches"/>
                                                            <option value="Tvs"/>
                                                            <option value="Phones"/>
                                                </datalist> */}
                                          {/* </div> */}
                                          <button className="search-button"><i type="submit" className="fa fa-search" aria-hidden="true"></i></button>
                              </form>
                              
                              <div className="navright">
                                    <div className="signin-link">
                                          <div className="signin-menu" onMouseOver={this.whenHover} >
                                                <span className="menu1">Hello, {user}</span>
                                                <span className="menu2">Account & Lists</span>
                                                <div onMouseOver={e => e.stopPropagation()} onMouseLeave={this.whenHover} className={this.state.show ? "show" : "clear"}>
                                                      <div className="arrow-modal"></div>
                                                      <div >
                                                            {logOutButton}
                                                            {signInButton}
                                                            {signUpLink}
                                                      </div>
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
                                                <Badge color="success" badgeContent={cartCount}>
                                                      <i className="fa fa-shopping-cart"></i>
                                                </Badge>
                                          </div>
                                    </Link>
                        
                              </div>
                        </nav>
                        
                  </div>
            )
      }

}

export default withRouter(Welcome);