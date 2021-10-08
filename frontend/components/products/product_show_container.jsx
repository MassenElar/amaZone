import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'
import ProductShow from './product_show'
import { createCartItem, fetchCartItems, updateCartItem } from '../../actions/cart_item_actions'
import { fetchReviews, updateReview } from '../../actions/review.actions';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {
      return {
            reviews: Object.values(state.entities.reviews),
            product: state.entities.products[ownProps.match.params.productId],
            loggedIn: !!state.session.id,
            currentUser: state.entities.users[state.session.id],
            cartItems: Object.values(state.entities.cartItems)
      };
}

const mDTP = (dispatch) => ({
      fetchProduct: productId => dispatch(fetchProduct(productId)),
      createCartItem: cartItem => dispatch(createCartItem(cartItem)),
      fetchReviews: (productId) => dispatch(fetchReviews(productId)),
      fetchCartItems: () => dispatch(fetchCartItems()),
      updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
});

export default withRouter(connect(mSTP, mDTP)(ProductShow));