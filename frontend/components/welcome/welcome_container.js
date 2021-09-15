import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Welcome from './welcome';
import { fetchProducts } from '../../actions/product_actions';

const mSTP = ({ session, entities: { users, products } }) => {
  return {
    currentUser: users[session.id],
    products: products
  };
};

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  logout: () => dispatch(logout())
});

export default connect(
  mSTP,
  mDTP
)(Welcome);