import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',    
      email: '',
      password: ''
    };
//     this.handleSubmit = this.handleSubmit.bind(this);
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
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

      render() {
            let username;
           if (this.props.formType === 'signup') {
            username = <label>username:
                        <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                        </label>  
            } 

      return (
      <div className="container">
      <form className="session-form">
            <h1 className="form-title">{this.props.formType}</h1>
            <h2>{this.renderErrors()}</h2>
            {username}
            <label htmlFor="email">Email</label>
              <input 
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.update('email')}
              />
            <label htmlFor="password">Password</label>
              <input 
              type="password"
                id="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            <button className="submit-button" onClick={(e) => this.handleSubmit(e)}>{this.props.formType} </button>
            <button className="submit-button" onClick={(e) => this.handleDemoUser(e)}>Demo User</button>
          
        </form>
      </div>
    );
  }
}

export default SessionForm;
