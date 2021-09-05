import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = ({ currentUser, logout }) => {

      if (currentUser) {
            return (
                  <div>
                        <h1>Welcome {currentUser.username}</h1>
                        <button onClick={logout}>Logout</button>
                  </div>
            )
      } else {
            return (
                  <div>
                        <Link to="/signup">SignUp</Link>
                        <br></br>
                        <Link to="/login">Login</Link>
                  </div>
            )
      }

}

export default Welcome;