import { connect } from 'react-redux';


import Footer from './footer';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};


export default connect(mSTP,null)(Footer);