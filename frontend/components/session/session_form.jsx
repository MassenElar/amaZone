import React from 'react';
// import logo from '../../../amaZoneLogo.png'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',    
      email: '',
      password: '',
    };
//     this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  handleDemoUser(e) {
        e.preventDefault();
        const demo = {
              username: "Oussama", email: "oussama@amaZone.com", password: "password"
        };
        this.setState(demo);
        this.props.processForm(demo);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

      render() {
            let username;
            let demoUser;
            let singUpButton
           if (this.props.formType === 'Sign-Up') {
                 username = <div>
                  <label className="label" htmlFor="username">Username
                  </label> 
                       <br/>
                  <input
                        className="input"
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                       />
                  </div>
                         
           } else {
             demoUser = <button className="submit-button" onClick={(e) => this.handleDemoUser(e)}>Demo User</button>
             singUpButton = <button className="submit-button"><Link className="signup-link" to="/signup">Sign Up</Link></button>
            }

      return (
      <div className="outer-container">
            <img className="logo" src={window.amaZoneLogoURL}></img>
            <div className="container">
            <form className="session-form">
                  <h1 className="form-title">{this.props.formType}</h1>
                  <h2>{this.renderErrors()}</h2>
                  {username}
                  <div>
                        <label className="label" htmlFor="email">Email</label>
                          <input
                            className="input"
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                          />
                  </div>
                  <div>
                        <label className="label" htmlFor="password">Password</label>
                          <input
                          className="input"
                          type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                          />
                  </div>
                  <button className="submit-button" onClick={(e) => this.handleSubmit(e)}>{this.props.formType} </button>
                  {demoUser}
                  {singUpButton}
                  <p className="user-conditions">By continuing, you agree to Amazon's <span className="span">Conditions of Use</span> and <span className="span">Privacy Notice</span>.</p>
              </form>
          </div>
      </div>
    );
  }
}

export default SessionForm;
