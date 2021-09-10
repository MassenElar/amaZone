import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../amaZoneLogo1.png'


const Footer = () => {
      return (
            <footer className="footer">
                  <div className="footer-signin">
                        <p>See personalized recommendations</p>
                        <button className="submit-button"><Link className="botton-footer-link" to="/login">Sign In</Link></button>
                        <p className="new-cost-footer">New customer? <span><Link className="footer-span" to="/signup">Start Here</Link></span></p>
                  </div>
                  <div className="footer-items">
                        
                        <div className="back-to-top">
                              <p>back to Top</p>
                        </div>
                        <div className="footer-list">
                              <ul>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                              </ul>
                              <ul>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                              </ul>
                              <ul>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                                    <li>Get to Know Us</li>
                              </ul>
                        </div>
                        <div className="footer-links">
                              <img className="logo-footer" src={window.amaZoneLogo1URL}></img>
                              <i className="fa fa-github" ></i>
                              <i className="fa fa-linkedin-square"></i>
                        </div>
                  </div>
            </footer>
      )

}

export default Footer;