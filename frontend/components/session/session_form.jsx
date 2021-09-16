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
            <Link to="/"><img className="logo-session" src={window.amaZoneLogoURL}></img></Link>
            <div className="container">
            <form className="session-form">
                  <h1 className="form-title">{this.props.formType}</h1>
                  {username}
                  <div>
                        <label className="label" htmlFor="email">Email</label>
                          <input
                            className={this.props.errors.length === 0 ? 'input' : 'input error-red'}
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                          />
                  </div>
                  <div>
                        <label className="label" htmlFor="password">Password</label>
                          <input
                          className={this.props.errors.length === 0 ? 'input' : 'input error-red'}
                          type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                          />
                  </div>
                  <h2>{this.renderErrors()}</h2>
                  <button className="submit-button" onClick={(e) => this.handleSubmit(e)}>{this.props.formType} </button>
                  {demoUser}
                  {singUpButton}
                  <p className="user-conditions">By continuing, you agree to amaZon's Conditions of Use and Privacy Notice</p>
              </form>
          </div>
      </div>
    );
  }
}

export default SessionForm;
