import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Welcome from './welcome';
import { fetchProducts } from '../../actions/product_actions';
import { fetchCartItems } from '../../actions/cart_item_actions';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    products: state.entities.products,
    cartItems: Object.values(state.entities.cartItems)
  };
};

const mDTP = dispatch => ({
  fetchProducts: (data) => dispatch(fetchProducts(data)),
  fetchCartItems: () => dispatch(fetchCartItems()),
  logout: () => dispatch(logout())
});

export default connect(
  mSTP,
  mDTP
)(Welcome);