import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../amaZoneLogo1.png'


class Footer extends React.Component {
      constructor(props) {
            super(props)
      }


      render() {
            const {currentUser} = this.props
            let footerSignin;
            if (currentUser !== undefined) {
                  footerSignin = null;
            } else {
                  footerSignin = <div className="footer-signin">
                                    <p>See personalized recommendations</p>
                                    <button className="submit-button"><Link className="botton-footer-link" to="/login">Sign In</Link></button>
                                    <p className="new-cost-footer">New customer? <span><Link className="footer-span" to="/signup">Start Here</Link></span></p>
                              </div>
            }
            return (
                  <footer className="footer">
                        
                        {/* <div className="footer-signin">
                              <p>See personalized recommendations</p>
                              <button className="submit-button"><Link className="botton-footer-link" to="/login">Sign In</Link></button>
                              <p className="new-cost-footer">New customer? <span><Link className="footer-span" to="/signup">Start Here</Link></span></p>
                        </div> */}
                        {footerSignin}
                        <div className="footer-items">
                              <div className="back-to-top">
                                    <p>Back to Top</p>
                              </div>
                              <div className="footer-list">
                                    <ul>
                                          <li className="footer-list-title">Technologies </li>
                                          <li className="footer-list-subtitles">Ruby on Rails</li>
                                          <li className="footer-list-subtitles">React JS</li>
                                          <li className="footer-list-subtitles">Postgres DB</li>
                                          
                                    </ul>
                                    <ul>
                                          <li className="footer-list-title">Languages</li>
                                          <li className="footer-list-subtitles">JavaScript</li>
                                          <li className="footer-list-subtitles">Ruby</li>
                                          
                                    </ul>
                                    <ul>
                                          <li className="footer-list-title">amaZone</li>
                                          <li className="footer-list-subtitles">E-commerce website</li>
                                          <li className="footer-list-subtitles">Inspired by Amazon</li>
                                          
                                    </ul>
                              </div>
                              <div className="footer-links">
                                    <Link to="/"><img className="logo-footer" src={window.amaZoneLogo1URL}></img></Link>
                                    <a href="https://github.com/OussamaElar"><i className="fa fa-github" ></i></a>
                                    <a href="https://www.linkedin.com/in/oussama-el-arabi-b67b1686/"><i className="fa fa-linkedin-square"></i></a>
                              </div>
                        </div>
                  </footer>
            )
      }


}

export default Footer;