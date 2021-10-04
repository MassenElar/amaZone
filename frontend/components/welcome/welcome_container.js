import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Welcome from './welcome';
import { fetchProducts } from '../../actions/product_actions';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    products: state.entities.products
  };
};

const mDTP = dispatch => ({
  fetchProducts: (data) => dispatch(fetchProducts(data)),
  logout: () => dispatch(logout())
});

export default connect(
  mSTP,
  mDTP
)(Welcome);